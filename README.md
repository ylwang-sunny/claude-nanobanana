# 🍌 Nano Banana Clone

这是一个 [nanobanana.ai](https://nanobanana.ai/) 网站的前端样式复刻版本。

## ✨ 特性

- 🎨 完整复刻原网站的视觉设计
- 🌓 支持深色/浅色模式
- 📱 完全响应式设计
- ⚡ 使用 Vite 构建,开发体验极佳
- 🎭 精美的渐变色和动画效果
- 🍌 有趣的香蕉主题设计

## 🛠️ 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **语言**: JavaScript (JSX)

## 📦 安装

```bash
npm install
```

## ⚙️ 环境配置

1. 复制环境变量示例文件:
```bash
cp .env.example .env.local
```

2. 在 `.env.local` 中配置以下环境变量:

```env
# OpenRouter API Key (用于 Gemini AI 图像生成)
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here

# Supabase 配置 (用于用户认证)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. 获取 Supabase 配置:
   - 访问 [Supabase Dashboard](https://app.supabase.com)
   - 创建新项目或选择现有项目
   - 在项目设置中找到 API 配置
   - 配置 OAuth 提供商(GitHub 和 Google)
   - 详细配置说明请查看 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

## 🚀 运行

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

## 🏗️ 构建

```bash
npm run build
```

## 🌐 部���

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在 Vercel 项目设置中添加环境变量:
   - `VITE_OPENROUTER_API_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SITE_URL` (设置为你的 Vercel 域名)
4. 部署完成后,在 Supabase 项目设置中添加生产环境的重定向 URL

### Netlify 部署

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建设置:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 在环境变量中添加相同的配置
5. 更新 Supabase 的授权回调 URL

**重要**: 部署后需要在 Supabase Dashboard 中更新以下设置:
- Authentication > URL Configuration > Site URL
- Authentication > URL Configuration > Redirect URLs (添加生产环境的回调 URL)

## 📁 项目结构

```
src/
├── components/
│   ├── HeroSection.jsx       # 首页英雄区域
│   ├── GeneratorSection.jsx  # AI生成器交互区
│   ├── FeaturesSection.jsx   # 核心功能展示
│   ├── ShowcaseSection.jsx   # 作品展示
│   ├── ReviewsSection.jsx    # 用户评价
│   ├── FAQSection.jsx        # 常见问题
│   └── Footer.jsx            # 页脚
├── App.jsx                   # 主应用组件
├── main.jsx                  # 应用入口
└── index.css                 # 全局样式
```

## 🎨 设计亮点

### 配色方案
- 主色调: 黄色 (#facc15) 到琥珀色 (#f59e0b)
- 渐变效果: 多层次渐变叠加
- 深色模式: 完美适配

### 组件特色
1. **Hero区域**: 大胆的渐变标题,悬浮香蕉装饰
2. **Prompt Engine**: 卡片式设计,玻璃态效果
3. **Features**: 6个特性卡片,悬浮动画
4. **Showcase**: 作品展示网格,速度标签
5. **Reviews**: 用户评价卡片
6. **FAQ**: 手风琴式折叠面板

## 📝 说明

这是一个纯前端的样式复刻项目,主要用于学习和展示目的。不包含后端功能和实际的AI图像处理能力。

## 📄 许可

本项目仅供学习参考使用。
