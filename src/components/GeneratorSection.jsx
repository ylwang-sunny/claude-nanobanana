import React, { useState } from 'react'
import { Rocket, Sparkles, Image, Zap, Images, Crown } from 'lucide-react'

const GeneratorSection = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedModel, setSelectedModel] = useState('nano-banana')

  return (
    <section id="generator" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Try The AI Editor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text commands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Prompt Engine */}
          <div className="space-y-4">
            <div className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/50 to-amber-50/30 dark:from-gray-900 dark:via-yellow-950/20 dark:to-amber-950/10 shadow-xl rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                      Prompt Engine
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Transform your image with AI-powered editing</p>
                  </div>
                </div>
              </div>

              <hr className="h-0.5 bg-yellow-200 dark:bg-yellow-800 border-0" />

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Mode Toggle */}
                <div className="flex rounded-lg overflow-hidden">
                  <button className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold py-2 px-4 flex items-center justify-center gap-2">
                    <Image className="h-4 w-4" />
                    Image to Image
                  </button>
                  <button className="flex-1 bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800 py-2 px-4 flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Text to Image
                  </button>
                </div>

                {/* Model Selection */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Model Selection</span>
                  </div>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-colors"
                  >
                    <option value="nano-banana">Nano Banana</option>
                    <option value="nano-banana-pro">Nano Banana Pro</option>
                    <option value="seedream4">SeeDream 4</option>
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Different models offer unique characteristics and styles</p>
                </div>

                {/* Batch Processing */}
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Batch Processing</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full">
                        <Crown className="h-3 w-3" />
                        Pro
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Enable batch mode to process multiple images at once</span>
                  </div>
                  <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-medium bg-warning/20 text-warning-700 dark:text-warning rounded-lg">
                    <Crown className="h-3.5 w-3.5" />
                    Upgrade
                  </button>
                </div>

                {/* Reference Images */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Images className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Reference Image</span>
                    <span className="text-sm">0/9</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="aspect-square border-2 border-dashed border-yellow-300 dark:border-yellow-700 rounded-lg flex flex-col items-center justify-center hover:border-amber-400 dark:hover:border-amber-600 transition-colors bg-yellow-50/50 dark:bg-yellow-950/20 cursor-pointer">
                      <input type="file" className="hidden" accept="image/*" multiple />
                      <div className="text-center">
                        <div className="text-4xl mb-2">+</div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Add Image</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-500 mt-1">Max 10MB</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Prompt Input */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">Main Prompt</span>
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                    className="w-full px-3 py-2 border-2 border-yellow-200 dark:border-yellow-800 hover:border-amber-400 dark:hover:border-amber-600 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg resize-none h-20 transition-colors"
                  />
                </div>

                {/* Generate Button */}
                <button
                  disabled
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                >
                  <Zap className="h-5 w-5" />
                  Generate Now
                </button>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Want more powerful image generation features?</p>
              <a href="/generator" className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300">
                Visit Full Generator →
              </a>
            </div>
          </div>

          {/* Right Panel - Output Gallery */}
          <div className="min-h-[600px] border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 dark:from-gray-900 dark:via-yellow-950/10 dark:to-amber-950/10 shadow-xl rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30">
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent">
                Output Gallery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your ultra-fast AI creations appear here instantly</p>
            </div>

            <hr className="h-0.5 bg-yellow-200 dark:bg-yellow-800 border-0" />

            {/* Empty State */}
            <div className="p-5 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 inline-block">
                  <Image className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Ready for instant generation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Enter your prompt and unleash the power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneratorSection
