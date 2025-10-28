import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:px-8">
      {/* Background - Clean white/dark */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950"></div>

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 border border-yellow-200 dark:border-yellow-800">
              <span>🍌</span>
              <span className="text-gray-700 dark:text-gray-300">The AI model that outperforms Flux Kontext</span>
              <a href="#generator" className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors ml-1">
                Try Now →
              </a>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Nano Banana
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#generator"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              Start Editing
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              View Examples
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
