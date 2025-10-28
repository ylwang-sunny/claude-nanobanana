'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Nano Banana?',
    answer: "It's a revolutionary AI image editing model that transforms photos using natural language prompts. This is currently the most powerful image editing model available, with exceptional consistency. It offers superior performance compared to Flux Kontext for consistent character editing and scene preservation."
  },
  {
    question: 'How does it work?',
    answer: 'Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like "place the creature in a snowy mountain" or "imagine the whole face and create it". It processes your text prompt and generates perfectly edited images.'
  },
  {
    question: 'How is it better than Flux Kontext?',
    answer: 'This model excels in character consistency, scene blending, and one-shot editing. Users report it "completely destroys" Flux Kontext in preserving facial features and seamlessly integrating edits with backgrounds. It also supports multi-image context, making it ideal for creating consistent AI influencers.'
  },
  {
    question: 'Can I use it for commercial projects?',
    answer: "Yes! It's perfect for creating AI UGC content, social media campaigns, and marketing materials. Many users leverage it for creating consistent AI influencers and product photography. The high-quality outputs are suitable for professional use."
  },
  {
    question: 'What types of edits can it handle?',
    answer: 'The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions like "place in a blizzard" or "create the whole face" while maintaining photorealistic quality.'
  },
  {
    question: 'Where can I try Nano Banana?',
    answer: 'You can try nano-banana on LMArena or through our web interface. Simply upload your image, enter a text prompt describing your desired edits, and watch as nano-banana AI transforms your photo with incredible accuracy and consistency.'
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">FAQs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-yellow-200 dark:border-yellow-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
              open={openIndex === index}
            >
              <summary
                onClick={(e) => {
                  e.preventDefault()
                  toggleFAQ(index)
                }}
                className="cursor-pointer px-6 py-4 font-medium text-gray-900 dark:text-white hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </summary>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
