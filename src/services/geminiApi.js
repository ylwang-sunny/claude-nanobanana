import OpenAI from 'openai'

// 初始化 OpenAI 客户端（用于 OpenRouter API）
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
    'X-Title': import.meta.env.VITE_SITE_NAME || 'Nano Banana AI',
  },
  dangerouslyAllowBrowser: true, // 允许在浏览器中使用
})

/**
 * 将文件转换为 base64 编码的 data URL
 * @param {File} file - 图片文件
 * @returns {Promise<string>} - base64 编码的 data URL
 */
export const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * 调用 Gemini 2.5 Flash Image API 生成图片
 * @param {string} prompt - 用户输入的提示词
 * @param {Array} images - 上传的图片数组（包含 preview 字段）
 * @returns {Promise<string>} - 生成的图片描述或处理结果
 */
export const generateImage = async (prompt, images = []) => {
  try {
    // 验证输入
    if (!prompt || prompt.trim() === '') {
      throw new Error('请输入提示词')
    }

    if (images.length === 0) {
      throw new Error('请至少上传一张图片')
    }

    // 构建消息内容
    const messageContent = [
      {
        type: 'text',
        text: prompt,
      },
    ]

    // 添加所有上传的图片
    images.forEach((img) => {
      messageContent.push({
        type: 'image_url',
        image_url: {
          url: img.preview, // 使用 base64 编码的 data URL
        },
      })
    })

    // 调用 API
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.5-flash-image-preview',
      messages: [
        {
          role: 'user',
          content: messageContent,
        },
      ],
      max_tokens: 1000, // 限制响应长度
    })

    // 返回生成的内容
    return completion.choices[0].message.content
  } catch (error) {
    console.error('API 调用错误:', error)

    // 处理不同类型的错误
    if (error.message.includes('API key')) {
      throw new Error('API Key 配置错误，请检查 .env.local 文件')
    } else if (error.message.includes('network')) {
      throw new Error('网络连接失败，请检查网络设置')
    } else if (error.status === 429) {
      throw new Error('API 调用次数超限，请稍后再试')
    } else if (error.status === 401) {
      throw new Error('API Key 无效，请检查配置')
    } else {
      throw new Error(error.message || '图片生成失败，请重试')
    }
  }
}

/**
 * 检查 API Key 是否已配置
 * @returns {boolean} - 是否已配置 API Key
 */
export const isApiKeyConfigured = () => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
  return apiKey && apiKey !== 'your_api_key_here'
}
