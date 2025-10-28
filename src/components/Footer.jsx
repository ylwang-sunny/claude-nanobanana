import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🍌</span>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
              AI Editor
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 nanobanana.ai All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="/refund" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Refund Policy
            </a>
            <a href="/refund-application" className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Refund Application
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
