# 🍌 Nano Banana - Next.js版本

这是使用Next.js重构的nanobanana.ai网站前端项目。

## ✨ 特性

- 🎨 完整复刻原网站的视觉设计
- 🌓 支持深色/浅色模式
- 📱 完全响应式设计
- ⚡ 使用Next.js 15构建,性能卓越
- 🎭 精美的渐变色和动画效果
- 🍌 有趣的香蕉主题设计
- 🔧 TypeScript支持

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **UI库**: React 18
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **语言**: TypeScript

## 📦 安装

```bash
cd nextjs-nanobanana
npm install
```

## 🚀 运行

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

## 🏗️ 构建

```bash
npm run build
npm start
```

## 📁 项目结构

```
nextjs-nanobanana/
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页
│   └── globals.css         # 全局样式
├── components/
│   ├── HeroSection.tsx     # 首页英雄区域
│   ├── GeneratorSection.tsx # AI生成器交互区
│   ├── FeaturesSection.tsx  # 核心功能展示
│   ├── ShowcaseSection.tsx  # 作品展示
│   ├── ReviewsSection.tsx   # 用户评价
│   ├── FAQSection.tsx       # 常见问题
│   └── Footer.tsx           # 页脚
├── public/                  # 静态资源
├── next.config.js           # Next.js配置
├── tailwind.config.js       # Tailwind配置
└── tsconfig.json            # TypeScript配置
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

## 🔧 与原项目的差异

### Next.js特性
- **App Router**: 使用Next.js 15的App Router架构
- **服务端组件**: 默认使用服务端组件,性能更优
- **客户端组件**: 需要交互的组件使用'use client'指令
- **TypeScript**: 完整的类型支持
- **自动优化**: 自动代码分割和优化

### 文件结构
- 使用`app/`目录而不是`pages/`
- 组件放在`components/`目录
- 使用`.tsx`扩展名(TypeScript + JSX)

## 📝 说明

这是一个纯前端的样式复刻项目,主要用于学习和展示目的。不包含后端功能和实际的AI图像处理能力。

## 🌐 本地访问

开发服务器启动后,可以通过以下地址访问:
- 本地: http://localhost:3000
- 网络: http://172.20.10.5:3000 (局域网访问)

## 📄 许可

本项目仅供学习参考使用。
