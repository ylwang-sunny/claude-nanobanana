import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const AuthCallback = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    // 处理 OAuth 回调
    const handleCallback = async () => {
      try {
        if (!supabase) {
          throw new Error('Supabase 未配置')
        }

        // 检查 URL 中是否有错误参数
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const searchParams = new URLSearchParams(window.location.search)

        const errorParam = hashParams.get('error') || searchParams.get('error')
        const errorDescription = hashParams.get('error_description') || searchParams.get('error_description')

        if (errorParam) {
          throw new Error(errorDescription || errorParam)
        }

        // Supabase 会自动处理 URL 中的认证参数
        // 我们需要等待认证状态更新
        console.log('等待认证处理...')

        // 给 Supabase 一点时间处理 URL 中的认证参数
        await new Promise(resolve => setTimeout(resolve, 500))

        // 获取会话
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error('获取会话失败:', error)
          throw error
        }

        if (data.session) {
          // 登录成功，跳转到首页
          console.log('登录成功:', data.session.user.email)
          // 使用 setTimeout 确保状态更新完成后再跳转
          setTimeout(() => {
            navigate('/', { replace: true })
          }, 100)
        } else {
          // 如果没有会话，跳转到登录页
          console.warn('没有会话，跳转到登录页')
          navigate('/login', { replace: true })
        }
      } catch (err) {
        console.error('认证回调错误:', err)
        setError(err.message || '认证失败，请重试')
        // 3秒后跳转到登录页
        setTimeout(() => {
          navigate('/login', { replace: true })
        }, 3000)
      }
    }

    handleCallback()
  }, [navigate])

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-800">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <svg
                className="h-8 w-8 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            认证失败
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{error}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            正在跳转到登录页...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-800">
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
        </div>
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          正在完成登录...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          请稍候，我们正在处理您的登录请求
        </p>
      </div>
    </div>
  )
}

export default AuthCallback
