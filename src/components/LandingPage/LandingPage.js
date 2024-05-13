import React, { Fragment } from 'react'

import AboutSection from '../AboutSection/AboutSection';
import Testimonials from '../Testimonials/Testimonials';
import ContactSection from '../ContactSection/ContactSection';
import PartnerSection from '../PartnerSection/PartnerSection';
import Team from '../Team/Team';
import PracticeAreas from '../PracticeAreas/PracticeAreas';
import ContactFormSection from '../ContactFormSection/ContactFormSection';
import BlogSection from '../BlogSection/BlogSection';
import HeroSection from '../HeroSection/HeroSection';
import HistorySection from '../HistorySection/HistorySection';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <Fragment>
        <HeroSection />
        <AboutSection />
        <PracticeAreas />
        <PartnerSection />
        <HistorySection />
        <Testimonials />
        <Team />
        <ContactSection />
        <ContactFormSection />
        <BlogSection />
    </Fragment>
  )
}

export default LandingPage
