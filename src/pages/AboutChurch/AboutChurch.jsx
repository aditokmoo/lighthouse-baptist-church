import React from 'react'
import Footer from '../Home/Footer/Footer'
import HeroSection from '../Home/HeroSection/HeroSection'
import AboutSection from './AboutSection'
import Staff from './Staff'

const AboutChurch = () => {
  return (
    <>
      <HeroSection title='About Our Church' />
      <AboutSection />
      <Staff />
      <Footer />
    </>
  )
}

export default AboutChurch