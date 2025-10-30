import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import GeneratorSection from './components/GeneratorSection'
import FeaturesSection from './components/FeaturesSection'
import ShowcaseSection from './components/ShowcaseSection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Login from './pages/Login'
import AuthCallback from './pages/AuthCallback'

// 主页组件
function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Routes>
        {/* 主页路由 */}
        <Route path="/" element={
          <>
            <Header />
            <HomePage />
          </>
        } />

        {/* 登录页面 */}
        <Route path="/login" element={<Login />} />

        {/* OAuth 回调路由 */}
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </div>
  )
}

export default App
