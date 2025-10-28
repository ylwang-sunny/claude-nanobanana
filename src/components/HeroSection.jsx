import React from 'react'
import { Sparkles, Activity, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-yellow-950/20 dark:via-gray-950 dark:to-amber-950/20"></div>

      {/* Decorative Elements */}
      <div className="hidden sm:block">
        <div className="fixed left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 pointer-events-none">
          <div className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto -rotate-12 text-8xl">🍌</div>
        </div>
        <div className="fixed right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 pointer-events-none">
          <div className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto rotate-12 scale-x-[-1] text-8xl">🍌</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Badge */}
          <div className="mb-6 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-amber-700 dark:text-amber-300 bg-yellow-100/80 dark:bg-yellow-900/30 backdrop-blur-sm border border-yellow-300 dark:border-yellow-700">
              🍌 The AI model that outperforms Flux Kontext
              <a href="#generator" className="font-semibold text-orange-600 dark:text-orange-400 ml-2">
                Try Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 dark:from-yellow-400 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Nano Banana
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300 font-medium">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <a
              href="/generator"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg h-12 rounded-full px-10 gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-amber-500 hover:from-yellow-500 hover:to-amber-500 dark:hover:from-yellow-600 dark:hover:to-amber-600 text-white shadow-lg"
            >
              Start Editing
              <span className="text-2xl">🍌</span>
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 border-2 bg-white/80 backdrop-blur-sm hover:text-slate-900 hover:border-slate-300 dark:bg-slate-950/80 dark:hover:text-slate-50 dark:hover:border-slate-600 h-12 rounded-full px-10 border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/30"
            >
              View Examples
            </a>
          </div>

          {/* Feature Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-x-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">One-shot editing</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Activity className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">Multi-image support</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="font-semibold">Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
