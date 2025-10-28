import React from 'react'
import { Cpu, Workflow, Gauge, Code, Layers, Target } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Natural Language Editing',
    description: 'Edit images using simple text prompts. Nano-banana AI understands complex instructions like GPT for images',
    gradient: 'from-yellow-400 to-amber-500',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    bgGradient: 'from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20'
  },
  {
    icon: Workflow,
    title: 'Character Consistency',
    description: 'Maintain perfect character details across edits. This model excels at preserving faces and identities',
    gradient: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-200 dark:border-amber-800',
    bgGradient: 'from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20'
  },
  {
    icon: Gauge,
    title: 'Scene Preservation',
    description: 'Seamlessly blend edits with original backgrounds. Superior scene fusion compared to Flux Kontext',
    gradient: 'from-orange-400 to-red-500',
    borderColor: 'border-orange-200 dark:border-orange-800',
    bgGradient: 'from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20'
  },
  {
    icon: Code,
    title: 'One-Shot Editing',
    description: 'Perfect results in a single attempt. Nano-banana solves one-shot image editing challenges effortlessly',
    gradient: 'from-yellow-400 to-amber-500',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    bgGradient: 'from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950/20'
  },
  {
    icon: Layers,
    title: 'Multi-Image Context',
    description: 'Process multiple images simultaneously. Support for advanced multi-image editing workflows',
    gradient: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-200 dark:border-amber-800',
    bgGradient: 'from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20'
  },
  {
    icon: Target,
    title: 'AI UGC Creation',
    description: 'Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns',
    gradient: 'from-orange-400 to-red-500',
    borderColor: 'border-orange-200 dark:border-orange-800',
    bgGradient: 'from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20'
  }
]

const FeaturesSection = () => {
  return (
    <section id="features" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">Core Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Nano Banana?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Nano-banana is the most advanced AI image editor on LMArena. Revolutionize your photo editing with natural language understanding
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`rounded-3xl border shadow-lg dark:bg-slate-950 dark:text-slate-50 relative overflow-hidden ${feature.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${feature.bgGradient}`}
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold tracking-tight text-xl">{feature.title}</div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
