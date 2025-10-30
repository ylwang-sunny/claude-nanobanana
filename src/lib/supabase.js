import { createClient } from '@supabase/supabase-js'

// 从环境变量获取 Supabase 配置
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 检查配置是否有效
const isValidUrl = supabaseUrl &&
  supabaseUrl !== 'your_supabase_project_url' &&
  (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'))

const isValidKey = supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key'

let supabase = null

// 只在配置有效时创建客户端
if (isValidUrl && isValidKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      // 设置认证流程
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce' // 使用 PKCE 流程增强安全性
    }
  })
} else {
  console.warn('⚠️ Supabase 未配置: 请在 .env.local 文件中设置有效的 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY')
  console.warn('📝 参考 SUPABASE_SETUP.md 文件获取配置说明')
}

export { supabase }

// 辅助函数：获取当前会话
export const getSession = async () => {
  if (!supabase) {
    console.warn('Supabase 未初始化')
    return null
  }
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error('获取会话失败:', error)
    return null
  }
  return data.session
}

// 辅助函数：获取当前用户
export const getUser = async () => {
  if (!supabase) {
    console.warn('Supabase 未初始化')
    return null
  }
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error('获取用户失败:', error)
    return null
  }
  return data.user
}

// 辅助函数：GitHub 登录
export const signInWithGithub = async () => {
  if (!supabase) {
    throw new Error('Supabase 未配置，无法登录')
  }
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })

  if (error) {
    console.error('GitHub 登录失败:', error)
    throw error
  }

  return data
}

// 辅助函数：Google 登录
export const signInWithGoogle = async () => {
  if (!supabase) {
    throw new Error('Supabase 未配置，无法登录')
  }
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  })

  if (error) {
    console.error('Google 登录失败:', error)
    throw error
  }

  return data
}

// 辅助函数：登出
export const signOut = async () => {
  if (!supabase) {
    console.warn('Supabase 未初始化')
    return
  }
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('登出失败:', error)
    throw error
  }
}
