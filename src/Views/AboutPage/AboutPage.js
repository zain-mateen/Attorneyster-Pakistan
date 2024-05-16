import React, { Fragment } from 'react'

import AboutHeroSection from '../../components/AboutHeroSection/AboutHeroSection';
import AboutStorySection from '../../components/AboutStorySection/AboutStorySection';
import AboutValueSection from '../../components/AboutValueSection/AboutValueSection';
import Team from '../../components/Team/Team';
import Testimonials from '../../components/Testimonials/Testimonials';
import PartnerSlider from '../../components/PartnerSection/PartnerSlider';

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
