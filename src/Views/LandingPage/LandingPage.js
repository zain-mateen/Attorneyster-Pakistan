import React, { Fragment } from 'react'

import AboutSection from '../../components/AboutSection/AboutSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactSection from '../../components/ContactSection/ContactSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Team from '../../components/Team/Team';
import PracticeAreas from '../../components/PracticeAreas/PracticeAreas';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import HistorySection from '../../components/HistorySection/HistorySection';

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
