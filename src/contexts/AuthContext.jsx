import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

// 创建认证上下文
const AuthContext = createContext({
  user: null,
  session: null,
  loading: true,
  signInWithGithub: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {}
})

// 导出 hook 供组件使用
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 内部使用')
  }
  return context
}

// AuthProvider 组件
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 获取初始会话
    const initializeAuth = async () => {
      try {
        if (!supabase) {
          console.warn('Supabase 未配置，跳过认证初始化')
          setLoading(false)
          return
        }

        const { data: { session }, error } = await supabase.auth.getSession()

        if (error) {
          console.error('获取会话失败:', error)
        } else {
          setSession(session)
          setUser(session?.user ?? null)
        }
      } catch (error) {
        console.error('认证初始化失败:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // 监听认证状态变化
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log('认证状态变化:', event, session)
          setSession(session)
          setUser(session?.user ?? null)
          setLoading(false)
        }
      )

      // 清理订阅
      return () => {
        subscription?.unsubscribe()
      }
    }
  }, [])

  // GitHub 登录
  const signInWithGithub = async () => {
    try {
      if (!supabase) {
        throw new Error('Supabase 未配置，请先配置 Supabase')
      }
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
      return data
    } catch (error) {
      console.error('GitHub 登录失败:', error)
      throw error
    }
  }

  // Google 登录
  const signInWithGoogle = async () => {
    try {
      if (!supabase) {
        throw new Error('Supabase 未配置，请先配置 Supabase')
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

      if (error) throw error
      return data
    } catch (error) {
      console.error('Google 登录失败:', error)
      throw error
    }
  }

  // 登出
  const signOut = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase 未初始化')
        return
      }
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
      setSession(null)
    } catch (error) {
      console.error('登出失败:', error)
      throw error
    }
  }

  const value = {
    user,
    session,
    loading,
    signInWithGithub,
    signInWithGoogle,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
