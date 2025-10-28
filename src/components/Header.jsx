import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, Sun, Moon, Zap } from 'lucide-react'

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isToolboxOpen, setIsToolboxOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const signInRef = useRef(null)
  const toolboxRef = useRef(null)

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signInRef.current && !signInRef.current.contains(event.target)) {
        setIsSignInOpen(false)
      }
      if (toolboxRef.current && !toolboxRef.current.contains(event.target)) {
        setIsToolboxOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSignInGitHub = () => {
    console.log('Sign in with GitHub')
    // window.location.href = '/auth/github'
  }

  const handleSignInGoogle = () => {
    console.log('Sign in with Google')
    // window.location.href = '/auth/google'
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

            {/* Language Selector - Sign In Dropdown */}
            <div className="relative" ref={signInRef}>
              <button
                onClick={() => setIsSignInOpen(!isSignInOpen)}
                className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-xl">🇺🇸</span>
                <ChevronDown className={`h-4 w-4 text-gray-700 dark:text-gray-300 transition-transform duration-200 ${isSignInOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Sign In Dropdown Menu */}
              {isSignInOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 overflow-hidden">
                  <div className="py-1">
                    <button
                      onClick={handleSignInGitHub}
                      className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Sign in with GitHub
                    </button>
                    <button
                      onClick={handleSignInGoogle}
                      className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign in with Google
                    </button>
                  </div>
                </div>
              )}
            </div>

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
