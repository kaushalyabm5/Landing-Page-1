import React from 'react'
import HomeHero from './HomeHero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import FAQ from './FAQ'
import ScrollToTop from './ScrollToTop'

const HomePage = () => {
  return (
    <div>
        <HomeHero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <ScrollToTop />
    </div>
  )
}

export default HomePage