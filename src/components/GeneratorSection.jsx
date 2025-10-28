import React, { useState, useRef } from 'react'
import { Rocket, Sparkles, Image, Zap, Images, Crown, X, Copy, Loader2 } from 'lucide-react'
import { generateImage, isApiKeyConfigured } from '../services/geminiApi'

const GeneratorSection = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedModel, setSelectedModel] = useState('nano-banana')
  const [uploadedImages, setUploadedImages] = useState([])
  const [mode, setMode] = useState('image-to-image') // 'image-to-image' or 'text-to-image'
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedResults, setGeneratedResults] = useState([])
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const MAX_IMAGES = 9
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

  // 处理文件选择
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    handleFiles(files)
  }

  // 处理拖放文件
  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  // 处理文件上传
  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'))

    const validFiles = imageFiles.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`文件 ${file.name} 超过 10MB 限制`)
        return false
      }
      return true
    })

    const remainingSlots = MAX_IMAGES - uploadedImages.length
    const filesToAdd = validFiles.slice(0, remainingSlots)

    filesToAdd.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          file: file,
          preview: e.target.result,
          name: file.name
        }])
      }
      reader.readAsDataURL(file)
    })

    if (validFiles.length > remainingSlots) {
      alert(`最多只能上传 ${MAX_IMAGES} 张图片`)
    }
  }

  // 删除图片
  const removeImage = (id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id))
  }

  // 清空所有图片
  const clearAllImages = () => {
    setUploadedImages([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // 处理图片生成
  const handleGenerate = async () => {
    // 清除之前的错误
    setError('')

    // 验证 API Key
    if (!isApiKeyConfigured()) {
      setError('请先在 .env.local 文件中配置 VITE_OPENROUTER_API_KEY')
      return
    }

    // 验证输入
    if (!prompt.trim()) {
      setError('请输入提示词')
      return
    }

    if (uploadedImages.length === 0) {
      setError('请至少上传一张图片')
      return
    }

    setIsGenerating(true)

    try {
      const result = await generateImage(prompt, uploadedImages)

      // 添加生成结果到列表
      setGeneratedResults(prev => [
        {
          id: Date.now(),
          prompt: prompt,
          result: result,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ])

      // 成功后可以选择清空输入
      // setPrompt('')
      // clearAllImages()
    } catch (err) {
      setError(err.message || '生成失败，请重试')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id="generator" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Try The AI Editor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text commands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Prompt Engine */}
          <div className="space-y-4">
            <div className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/50 to-amber-50/30 dark:from-gray-900 dark:via-yellow-950/20 dark:to-amber-950/10 shadow-xl rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                      Prompt Engine
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Transform your image with AI-powered editing</p>
                  </div>
                </div>
              </div>

              <hr className="h-0.5 bg-yellow-200 dark:bg-yellow-800 border-0" />

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Mode Toggle */}
                <div className="flex rounded-lg overflow-hidden">
                  <button
                    onClick={() => setMode('image-to-image')}
                    className={`flex-1 font-semibold py-2 px-4 flex items-center justify-center gap-2 transition-all ${
                      mode === 'image-to-image'
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Image className="h-4 w-4" />
                    Image to Image
                  </button>
                  <button
                    onClick={() => setMode('text-to-image')}
                    className={`flex-1 font-semibold py-2 px-4 flex items-center justify-center gap-2 transition-all ${
                      mode === 'text-to-image'
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Sparkles className="h-4 w-4" />
                    Text to Image
                  </button>
                </div>

                {/* Model Selection */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Model Selection</span>
                  </div>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-colors"
                  >
                    <option value="nano-banana">Nano Banana</option>
                    <option value="nano-banana-pro">Nano Banana Pro</option>
                    <option value="seedream4">SeeDream 4</option>
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Different models offer unique characteristics and styles</p>
                </div>

                {/* Batch Processing */}
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Batch Processing</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full">
                        <Crown className="h-3 w-3" />
                        Pro
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Enable batch mode to process multiple images at once</span>
                  </div>
                  <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-medium bg-warning/20 text-warning-700 dark:text-warning rounded-lg">
                    <Crown className="h-3.5 w-3.5" />
                    Upgrade
                  </button>
                </div>

                {/* Reference Images */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Images className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Reference Image</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{uploadedImages.length}/{MAX_IMAGES}</span>
                    </div>
                    {uploadedImages.length > 0 && (
                      <button
                        onClick={clearAllImages}
                        className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
                      >
                        清空全部
                      </button>
                    )}
                  </div>

                  <div
                    className="grid grid-cols-3 gap-3"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {/* 显示已上传的图片 */}
                    {uploadedImages.map((img) => (
                      <div key={img.id} className="relative aspect-square group">
                        <img
                          src={img.preview}
                          alt={img.name}
                          className="w-full h-full object-cover rounded-lg border-2 border-yellow-300 dark:border-yellow-700"
                        />
                        <button
                          onClick={() => removeImage(img.id)}
                          className="absolute -top-2 -right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-3 w-3" />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 rounded-b-lg truncate opacity-0 group-hover:opacity-100 transition-opacity">
                          {img.name}
                        </div>
                      </div>
                    ))}

                    {/* 添加图片按钮 */}
                    {uploadedImages.length < MAX_IMAGES && (
                      <label className="aspect-square border-2 border-dashed border-yellow-300 dark:border-yellow-700 rounded-lg flex flex-col items-center justify-center hover:border-amber-400 dark:hover:border-amber-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/30 transition-colors bg-yellow-50/50 dark:bg-yellow-950/20 cursor-pointer">
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={handleFileSelect}
                        />
                        <div className="text-center">
                          <div className="text-3xl text-amber-500 mb-1">+</div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Add Image</span>
                          <span className="block text-xs text-gray-500 dark:text-gray-500 mt-0.5">Max 10MB</span>
                        </div>
                      </label>
                    )}
                  </div>

                  {uploadedImages.length === 0 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                      支持拖放上传，或点击添加图片
                    </p>
                  )}
                </div>

                {/* Prompt Input */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Main Prompt</span>
                    </div>
                    {prompt && (
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(prompt)
                          alert('Prompt 已复制到剪贴板')
                        }}
                        className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
                      >
                        <Copy className="h-3 w-3" />
                        Copy
                      </button>
                    )}
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                    className="w-full px-3 py-2 border-2 border-yellow-200 dark:border-yellow-800 hover:border-amber-400 dark:hover:border-amber-600 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg resize-none h-24 transition-colors"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim() || uploadedImages.length === 0}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isGenerating || !prompt.trim() || uploadedImages.length === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5" />
                      Generate Now
                    </>
                  )}
                </button>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Want more powerful image generation features?</p>
              <a href="/generator" className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300">
                Visit Full Generator →
              </a>
            </div>
          </div>

          {/* Right Panel - Output Gallery */}
          <div className="min-h-[600px] border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 dark:from-gray-900 dark:via-yellow-950/10 dark:to-amber-950/10 shadow-xl rounded-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                    Output Gallery
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your ultra-fast AI creations appear here instantly</p>
                </div>
                {generatedResults.length > 0 && (
                  <button
                    onClick={() => setGeneratedResults([])}
                    className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
                  >
                    清空全部
                  </button>
                )}
              </div>
            </div>

            <hr className="h-0.5 bg-yellow-200 dark:bg-yellow-800 border-0" />

            {/* Content */}
            <div className="flex-1 p-5 overflow-y-auto">
              {isGenerating ? (
                /* Loading State */
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="h-16 w-16 text-amber-500 animate-spin mx-auto mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">AI 正在生成中...</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">请稍等片刻</p>
                  </div>
                </div>
              ) : generatedResults.length > 0 ? (
                /* Results Display */
                <div className="space-y-4">
                  {generatedResults.map((result) => (
                    <div
                      key={result.id}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-yellow-200 dark:border-yellow-800 shadow-sm"
                    >
                      <div className="mb-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            <span className="text-amber-600 dark:text-amber-400">Prompt:</span> {result.prompt}
                          </p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(result.result)
                              alert('结果已复制到剪贴板')
                            }}
                            className="flex-shrink-0 p-1 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {new Date(result.timestamp).toLocaleString('zh-CN')}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                          {result.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 inline-block">
                      <Image className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">Ready for instant generation</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Enter your prompt and unleash the power</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneratorSection
