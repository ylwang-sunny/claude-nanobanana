import React from 'react'

const reviews = [
  {
    name: 'AIArtistPro',
    role: 'Digital Creator',
    content: 'This editor completely changed my workflow. The character consistency is incredible - miles ahead of Flux Kontext!',
    gradient: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'ContentCreator',
    role: 'UGC Specialist',
    content: 'Creating consistent AI influencers has never been easier. It maintains perfect face details across edits!',
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20',
    borderColor: 'border-amber-200 dark:border-amber-800'
  },
  {
    name: 'PhotoEditor',
    role: 'Professional Editor',
    content: 'One-shot editing is basically solved with this tool. The scene blending is so natural and realistic!',
    gradient: 'from-orange-400 to-red-500',
    bgGradient: 'from-white to-orange-50 dark:from-gray-900 dark:to-orange-950/20',
    borderColor: 'border-orange-200 dark:border-orange-800'
  }
]

const ReviewsSection = () => {
  return (
    <section className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-400">User Reviews</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What creators are saying
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-3xl border shadow-lg dark:bg-slate-950 ${review.borderColor || 'border-yellow-200'} ${review.bgGradient ? `bg-gradient-to-br ${review.bgGradient}` : 'bg-white'}`}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-x-3">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${review.gradient}`}></div>
                  <div>
                    <div className="font-semibold tracking-tight text-base">{review.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{review.role}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-600 dark:text-gray-400">"{review.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
