import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GeneratorSection from '@/components/GeneratorSection'
import FeaturesSection from '@/components/FeaturesSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Disclaimer Banner */}
      <div className="py-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-orange-100 dark:border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-orange-800 dark:text-orange-300">
            Nanobanana.ai is an independent product and is not affiliate with Google or any of its brands
          </p>
        </div>
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
