'use client'

import React, { useState } from 'react'
import { Rocket, Sparkles, Image as ImageIcon, Images, Copy, Crown, Target } from 'lucide-react'

const GeneratorSection = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedModel, setSelectedModel] = useState('nano-banana')
  const [mode, setMode] = useState<'image-to-image' | 'text-to-image'>('image-to-image')

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <section id="generator" className="px-6 py-20 sm:py-28 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Try The AI Editor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text commands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Prompt Engine */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 via-amber-50/50 to-orange-50/30 dark:from-yellow-900/20 dark:via-amber-900/10 dark:to-orange-900/10 border-2 border-yellow-200/60 dark:border-yellow-800/60 rounded-3xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="p-6 border-b border-yellow-200/50 dark:border-yellow-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">
                      Prompt Engine
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Transform your image with AI-powered editing</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Mode Toggle */}
                <div className="flex rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800">
                  <button
                    onClick={() => setMode('image-to-image')}
                    className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 font-semibold text-sm transition-all ${
                      mode === 'image-to-image'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                        : 'bg-yellow-50 dark:bg-yellow-900/20 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30'
                    }`}
                  >
                    <ImageIcon className="h-4 w-4" />
                    Image to Image
                  </button>
                  <button
                    onClick={() => setMode('text-to-image')}
                    className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 font-semibold text-sm transition-all ${
                      mode === 'text-to-image'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                        : 'bg-yellow-50 dark:bg-yellow-900/20 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30'
                    }`}
                  >
                    <Target className="h-4 w-4" />
                    Text to Image
                  </button>
                </div>

                {/* Model Selection */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">AI Model Selection</span>
                  </div>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="nano-banana">Nano Banana</option>
                    <option value="nano-banana-pro">Nano Banana Pro</option>
                    <option value="seedream4">SeeDream 4</option>
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Different models offer unique characteristics and styles</p>
                </div>

                {/* Batch Processing */}
                <div className="flex items-center justify-between p-4 bg-yellow-50/80 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Batch Processing</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full">
                        <Crown className="h-3 w-3" />
                        Pro
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Enable batch mode to process multiple images at once</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors">
                    <Crown className="h-3.5 w-3.5" />
                    Upgrade
                  </button>
                </div>

                {/* Reference Images */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Images className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Reference Image</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">0/9</span>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-2xl p-12 flex flex-col items-center justify-center hover:border-orange-400 dark:hover:border-orange-600 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-all cursor-pointer group">
                      <input type="file" className="hidden" accept="image/*" multiple />
                      <div className="text-center">
                        <div className="text-5xl text-orange-500 mb-3 group-hover:scale-110 transition-transform">+</div>
                        <span className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">Add Image</span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400">Max 10MB</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Prompt Input */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Main Prompt</span>
                  </div>
                  <div className="relative">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                      className="w-full px-4 py-3 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 bg-white dark:bg-gray-800 rounded-xl resize-none h-24 transition-colors text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    onClick={copyPrompt}
                    className="flex items-center gap-1.5 text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Want more powerful image generation features?</p>
              <button className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                Visit Full Generator →
              </button>
            </div>
          </div>

          {/* Right Panel - Output Gallery */}
          <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 dark:from-gray-900 dark:to-orange-950/10 border-2 border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
              <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">
                Output Gallery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your ultra-fast AI creations appear here instantly</p>
            </div>

            {/* Empty State */}
            <div className="p-12 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-700 mb-6 inline-block">
                  <ImageIcon className="h-20 w-20 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Ready for instant generation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enter your prompt and unleash the power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneratorSection
