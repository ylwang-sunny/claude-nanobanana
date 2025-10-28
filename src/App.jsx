import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import GeneratorSection from './components/GeneratorSection'
import FeaturesSection from './components/FeaturesSection'
import ShowcaseSection from './components/ShowcaseSection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Disclaimer Banner */}
      <div className="mb-8 mt-20 flex justify-center">
        <span className="rounded bg-yellow-50 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-base text-amber-800 dark:bg-yellow-900/30 dark:text-amber-200 shadow">
          Nanobanana.ai is an independent product and is not affiliate with Google or any of its brands
        </span>
      </div>

      <HeroSection />
      <GeneratorSection />
      <FeaturesSection />
      <ShowcaseSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
