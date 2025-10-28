# Nano Banana AI 图片编辑器

一个基于 AI 的图片编辑工具，使用 Gemini 2.5 Flash Image API 进行图片分析和处理。

## 功能特点

✨ **核心功能**
- 🖼️ 多图片上传（最多 9 张，每张最大 10MB）
- 🎨 Image to Image / Text to Image 模式切换
- 💬 自然语言提示词输入
- 🚀 实时 AI 图片分析和生成
- 📱 响应式设计，支持暗黑模式
- 🎯 拖放上传支持

✨ **用户体验**
- 图片预览网格显示
- 实时加载动画
- 错误提示和验证
- 结果历史记录
- 一键复制功能

## 快速开始

### 1. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 2. 配置 API Key

在项目根目录创建 \`.env.local\` 文件：

\`\`\`env
# OpenRouter API Key for Gemini 2.5 Flash Image
VITE_OPENROUTER_API_KEY=your_api_key_here

# Optional: Your site URL and name
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=Nano Banana AI
\`\`\`

**获取 API Key：**
1. 访问 [OpenRouter.ai](https://openrouter.ai/)
2. 注册账号并获取 API Key
3. 将 API Key 填入 \`.env.local\` 文件

### 3. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:5173 即可使用。

## 使用说明

### 上传图片
1. 点击 "Add Image" 按钮选择图片
2. 或直接拖放图片到上传区域
3. 最多可上传 9 张图片

### 生成图片分析
1. 上传至少一张图片
2. 在 "Main Prompt" 输入框中输入提示词
3. 点击 "Generate Now" 按钮
4. 等待 AI 处理并在 Output Gallery 查看结果

### 功能说明
- **Image to Image**: 基于上传的图片进行分析和编辑
- **Text to Image**: 根据文本描述生成图片（需配合参考图片）
- **Batch Processing**: 批量处理功能（Pro 版本）

## 技术栈

- **前端框架**: React + Vite
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **AI API**: Gemini 2.5 Flash Image (via OpenRouter)
- **HTTP 客户端**: OpenAI SDK

## 项目结构

\`\`\`
claude-nanobanana/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # 导航栏组件
│   │   ├── GeneratorSection.jsx    # 图片生成主组件
│   │   ├── HeroSection.jsx         # 首页英雄区
│   │   └── ...                     # 其他组件
│   ├── services/
│   │   └── geminiApi.js            # Gemini API 服务
│   ├── App.jsx                     # 主应用组件
│   └── main.jsx                    # 入口文件
├── .env.local                      # 环境变量（不提交到 Git）
├── .gitignore                      # Git 忽略文件
├── package.json                    # 项目依赖
└── README.md                       # 项目说明
\`\`\`

## API 说明

本项目使用 [Gemini 2.5 Flash Image API](https://openrouter.ai/google/gemini-2.5-flash-image-preview/api)。

### API 特点
- 支持图片和文本混合输入
- 快速响应（Flash 版本）
- 支持多张图片同时处理
- 基于 base64 编码的图片传输

## 开发说明

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run preview
\`\`\`

## 注意事项

⚠️ **重要提示**
- 请勿将 \`.env.local\` 文件提交到 Git 仓库
- API Key 是私密信息，请妥善保管
- 建议在生产环境中使用环境变量管理工具
- API 调用可能产生费用，请注意用量

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
