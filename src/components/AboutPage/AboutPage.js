import React, { Fragment } from 'react'

import AboutHeroSection from '../AboutHeroSection/AboutHeroSection';
import AboutStorySection from '../AboutStorySection/AboutStorySection';
import AboutValueSection from '../AboutValueSection/AboutValueSection';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import PartnerSlider from '../PartnerSection/PartnerSlider';

import './AboutPage.scss';

const AboutPage = () => {
  return (
    <Fragment>
      <AboutHeroSection />
      <AboutStorySection />  
      <AboutValueSection />
      <Team />
      <Testimonials />
      <PartnerSlider />
    </Fragment>
  )
}

export default AboutPage
