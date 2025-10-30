# 修复 Supabase OAuth 回调错误

## 问题
点击 GitHub 登录后出现 `ERR_CONNECTION_REFUSED` 错误,提示无法访问 localhost。

## 原因
Supabase 项目中配置的回调 URL 与实际运行的开发服务器端口不匹配。

## 解决方案

### 1. 更新 Supabase 项目配置

访问 [Supabase Dashboard](https://app.supabase.com/project/fnjtztqusdkorxyjosky)

1. 进入左侧菜单 **Authentication** > **URL Configuration**

2. 在 **Site URL** 中设置:
   ```
   http://localhost:5173
   ```

3. 在 **Redirect URLs** 中添加以下 URL (点击 "Add URL"):
   ```
   http://localhost:5173/auth/callback
   ```

4. 点击 **Save** 保存配置

### 2. 重启开发服务器

```bash
# 停止当前服务器 (Ctrl+C)
# 重新启动
npm run dev
```

### 3. 测试登录流程

1. 访问 http://localhost:5173
2. 点击 "Sign In" 按钮
3. 在登录页面选择 GitHub 或 Google 登录
4. 完成 OAuth 授权
5. 应该会正确重定向回应用并显示登录状态

## 常见问题

### Q: 为什么会出现这个问题?
A: `.env.local` 中配置的端口 (5174) 与实际 Vite 开发服务器端口 (5173) 不一致。

### Q: 如果还是不行怎么办?
A:
1. 检查浏览器控制台是否有错误信息
2. 确认 Supabase Dashboard 中的配置已保存
3. 清除浏览器缓存和 Cookies
4. 使用无痕模式重试

### Q: 部署到生产环境需要做什么?
A: 在 Supabase Dashboard 的 Redirect URLs 中添加生产环境的回调 URL:
```
https://your-domain.com/auth/callback
```

## 验证配置

确认以下配置正确:

**本地环境 (.env.local)**
```env
VITE_SITE_URL=http://localhost:5173
VITE_SUPABASE_URL=https://fnjtztqusdkorxyjosky.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

**Supabase Dashboard**
- Site URL: `http://localhost:5173`
- Redirect URLs: `http://localhost:5173/auth/callback`
- GitHub OAuth 已启用
- Google OAuth 已启用
