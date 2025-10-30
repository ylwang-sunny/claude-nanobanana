import React from 'react'
import { Zap } from 'lucide-react'

const showcaseItems = [
  {
    title: 'Ultra-Fast Mountain Generation',
    description: 'Created in 0.8 seconds with Nano Banana\'s optimized neural engine',
    image: 'https://nanobanana.ai/_next/image?url=%2Fshowcase%2F1.jpeg&w=3840&q=75'
  },
  {
    title: 'Instant Garden Creation',
    description: 'Complex scene rendered in milliseconds using Nano Banana technology',
    image: 'https://nanobanana.ai/_next/image?url=%2Fshowcase%2F2.png&w=3840&q=75'
  },
  {
    title: 'Real-time Beach Synthesis',
    description: 'Nano Banana delivers photorealistic results at lightning speed',
    image: 'https://nanobanana.ai/_next/image?url=%2Fshowcase%2F3.png&w=3840&q=75'
  },
  {
    title: 'Rapid Aurora Generation',
    description: 'Advanced effects processed instantly with Nano Banana AI',
    image: 'https://nanobanana.ai/_next/image?url=%2Fshowcase%2F4.png&w=3840&q=75'
  }
]

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">Showcase</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Lightning-Fast AI Creations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See what Nano Banana generates in milliseconds
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
          {showcaseItems.map((item, index) => (
            <div key={index} className="rounded-3xl border bg-white shadow-lg dark:bg-slate-950 overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-200 dark:border-yellow-800">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                  <Zap className="h-3 w-3" />
                  Nano Banana Speed
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">Experience the power of Nano Banana yourself</p>
          <a
            href="#generator"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Zap className="h-4 w-4" />
            Try Nano Banana Generator
          </a>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
