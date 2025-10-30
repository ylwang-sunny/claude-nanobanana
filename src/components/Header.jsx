import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, Sun, Moon, Zap, LogOut, User, LogIn } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isToolboxOpen, setIsToolboxOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const signInRef = useRef(null)
  const toolboxRef = useRef(null)
  const userMenuRef = useRef(null)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signInRef.current && !signInRef.current.contains(event.target)) {
        setIsSignInOpen(false)
      }
      if (toolboxRef.current && !toolboxRef.current.contains(event.target)) {
        setIsToolboxOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSignInGitHub = () => {
    navigate('/login')
    setIsSignInOpen(false)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setIsUserMenuOpen(false)
    } catch (error) {
      console.error('登出失败:', error)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 dark:from-yellow-400 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Nano Banana
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#image-editor" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Image Editor
            </a>
            <a href="#showcase" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Showcase
            </a>

            {/* Toolbox Dropdown */}
            <div className="relative" ref={toolboxRef}>
              <button
                onClick={() => setIsToolboxOpen(!isToolboxOpen)}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Toolbox
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isToolboxOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolboxOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 overflow-hidden">
                  <div className="py-1">
                    <a href="#tool1" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Tool 1
                    </a>
                    <a href="#tool2" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Tool 2
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Pricing
            </a>
            <a href="#api" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              API
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Sign In Button */}
            {user ? (
              // 已登录 - 显示用户菜单
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {user.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="User avatar"
                      className="h-6 w-6 rounded-full"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium">
                      {user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                  <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>

                {/* 用户菜单下拉 */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.user_metadata?.full_name || user.user_metadata?.name || '用户'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // 未登录 - 显示 Sign in 按钮
              <button
                onClick={handleSignInGitHub}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 h-10 rounded-full px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-amber-500 hover:from-yellow-500 hover:to-amber-500 dark:hover:from-yellow-600 dark:hover:to-amber-600 text-white shadow-md hover:shadow-lg"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
            )}

            {/* Launch Now Button */}
            <a
              href="#generator"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 h-10 rounded-full px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-amber-500 hover:from-yellow-500 hover:to-amber-500 dark:hover:from-yellow-600 dark:hover:to-amber-600 text-white shadow-md hover:shadow-lg"
            >
              <Zap className="h-4 w-4" />
              Launch Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
