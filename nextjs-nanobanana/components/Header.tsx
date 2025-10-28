'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Sun, Moon, ChevronDown, Zap, Github } from 'lucide-react'

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const signInRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // 这里可以添加实际的主题切换逻辑
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
        setIsSignInOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍌</span>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
            Nano Banana
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#image-editor" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            Image Editor
          </a>
          <a href="#showcase" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            Showcase
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              Toolbox
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <a href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            Pricing
          </a>
          <a href="#api" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            API
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="切换主题"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Language Selector */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="text-xl">🇺🇸</span>
            <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Sign In Dropdown */}
          <div className="relative" ref={signInRef}>
            <button
              onClick={() => setIsSignInOpen(!isSignInOpen)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-500 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Sign In
              <ChevronDown className={`h-4 w-4 transition-transform ${isSignInOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isSignInOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                <div className="p-2">
                  <button
                    onClick={() => {
                      // 这里添加GitHub登录逻辑
                      console.log('Sign in with GitHub')
                      setIsSignInOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Sign in with GitHub</span>
                  </button>
                  <button
                    onClick={() => {
                      // 这里添加Google登录逻辑
                      console.log('Sign in with Google')
                      setIsSignInOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Launch Now Button */}
          <a
            href="#generator"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Zap className="h-4 w-4" />
            Launch Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
