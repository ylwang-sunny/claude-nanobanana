# Supabase GitHub 登录配置指南

## 已完成的实现

✅ 安装所需依赖包
✅ 创建 Supabase 客户端配置
✅ 创建认证上下文和 Provider
✅ 创建登录页面和回调处理页面
✅ 更新 Header 组件添加认证状态显示
✅ 配置路由系统

## 接下来需要配置的步骤

### 1. 创建 Supabase 项目

1. 访问 [Supabase Dashboard](https://app.supabase.com/)
2. 创建一个新项目
3. 记录下以下信息：
   - Project URL（项目 URL）
   - Anon Key（匿名密钥）

### 2. 在 GitHub 创建 OAuth 应用

1. 访问 [GitHub Developer Settings](https://github.com/settings/developers)
2. 点击 "New OAuth App" 或 "New GitHub App"
3. 填写以下信息：
   - **Application name**: `Nano Banana` （或你的应用名称）
   - **Homepage URL**: `http://localhost:5173`（开发环境）或你的生产环境 URL
   - **Authorization callback URL**: `https://YOUR_SUPABASE_PROJECT_URL/auth/v1/callback`
     - 替换 `YOUR_SUPABASE_PROJECT_URL` 为你的 Supabase 项目 URL
     - 例如：`https://abcdefgh.supabase.co/auth/v1/callback`
4. 点击 "Register application"
5. 记录下：
   - Client ID
   - Client Secret（需要生成）

### 3. 在 Supabase 配置 GitHub OAuth

1. 在 Supabase Dashboard 中，进入 `Authentication` > `Providers`
2. 找到 `GitHub` 提供商
3. 启用 GitHub 登录
4. 填入从 GitHub 获取的：
   - **Client ID**
   - **Client Secret**
5. 保存配置

### 4. 更新本地环境变量

编辑 `.env.local` 文件，填入实际的 Supabase 配置：

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

⚠️ **重要**: 将实际值替换：
- `your-project-id` - 你的 Supabase 项目 ID
- `your-anon-key` - 你的 Supabase 匿名密钥

### 5. 测试登录流程

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 访问 `http://localhost:5173`

3. 测试流程：
   - 点击 Header 右上角的语言选择器（🇺🇸）
   - 点击 "使用 GitHub 登录"
   - 应该跳转到登录页面
   - 点击 "使用 GitHub 登录" 按钮
   - 会重定向到 GitHub 授权页面
   - 授权后会返回应用，并完成登录
   - Header 应该显示用户头像和菜单

### 6. 生产环境配置

部署到生产环境时：

1. 在 Vercel/Netlify 等平台添加环境变量：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. 在 GitHub OAuth 应用中添加生产环境回调 URL：
   - `https://your-domain.com` （Homepage URL）
   - `https://YOUR_SUPABASE_PROJECT_URL/auth/v1/callback` （Callback URL）

3. 在 Supabase Dashboard 的 Authentication 设置中，添加生产环境域名到：
   - `Site URL`: `https://your-domain.com`
   - `Redirect URLs`: `https://your-domain.com/auth/callback`

## 功能说明

### 已实现的功能

1. **GitHub OAuth 登录**
   - 使用 PKCE 流程增强安全性
   - 自动处理会话管理和令牌刷新

2. **认证状态管理**
   - 全局 AuthContext 提供用户状态
   - 自动监听认证状态变化
   - 持久化会话存储

3. **用户界面**
   - 未登录：显示登录选项
   - 已登录：显示用户头像和信息
   - 用户菜单：个人资料、退出登录

4. **路由保护**
   - `/login` - 登录页面
   - `/auth/callback` - OAuth 回调处理
   - `/` - 主页（可访问用户状态）

### 项目文件结构

```
src/
├── lib/
│   └── supabase.js          # Supabase 客户端配置
├── contexts/
│   └── AuthContext.jsx      # 认证上下文
├── pages/
│   ├── Login.jsx            # 登录页面
│   └── AuthCallback.jsx     # OAuth 回调处理
├── components/
│   └── Header.jsx           # 更新的 Header（包含认证状态）
├── App.jsx                  # 路由配置
└── main.jsx                 # 应用入口（包含 Provider）
```

## 使用示例

### 在组件中使用认证状态

```jsx
import { useAuth } from '../contexts/AuthContext'

function MyComponent() {
  const { user, loading, signIn, signOut } = useAuth()

  if (loading) {
    return <div>加载中...</div>
  }

  if (user) {
    return (
      <div>
        <p>欢迎, {user.email}</p>
        <button onClick={signOut}>退出</button>
      </div>
    )
  }

  return <button onClick={signIn}>登录</button>
}
```

## 故障排除

### 常见问题

1. **登录后没有重定向**
   - 检查 GitHub OAuth 应用的回调 URL 是否正确
   - 确保 Supabase 的 Redirect URLs 包含 `http://localhost:5173/auth/callback`

2. **环境变量未生效**
   - 确保 `.env.local` 文件在项目根目录
   - 重启开发服务器（`npm run dev`）
   - 环境变量必须以 `VITE_` 开头

3. **CORS 错误**
   - 在 Supabase Dashboard 的 Authentication 设置中添加你的域名

## 安全注意事项

⚠️ **重要安全提示**:

1. 永远不要提交 `.env.local` 文件到 Git
2. 确保 `.env.local` 在 `.gitignore` 中
3. 使用环境变量存储敏感信息
4. 定期轮换 API 密钥
5. 在生产环境使用 HTTPS

## 相关文档

- [Supabase Auth 文档](https://supabase.com/docs/guides/auth)
- [GitHub OAuth 文档](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [React Router 文档](https://reactrouter.com/)
