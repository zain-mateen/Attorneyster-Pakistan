import React from 'react'
import './AboutPage.scss';
import AboutHeroSection from '../AboutHeroSection/AboutHeroSection';
import AboutStorySection from '../AboutStorySection/AboutStorySection';
import AboutValueSection from '../AboutValueSection/AboutValueSection';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import PartnerSlider from '../PartnerSection/PartnerSlider';

const AboutPage = () => {
  return (
      <>
          <AboutHeroSection />
          <AboutStorySection />
      
          <AboutValueSection />
          <Team />
          <Testimonials />
          <PartnerSlider />
      </>
  )
}

export default AboutPage
