import React from 'react'
import './PracticeAreaPage.scss';


import PracticeAreas from '../PracticeAreas/PracticeAreas';
import ContactSection from '../ContactSection/ContactSection';
import ContactFormSection from '../ContactFormSection/ContactFormSection';
import PartnerSlider from '../PartnerSection/PartnerSlider';
import HeaderInner from '../Header/HeaderInner';


const PracticeAreaPage = () => {
  return (
    <>
    <HeaderInner 
      WrapperHeading="Practice Area’s"
    />
    <PracticeAreas />
    <ContactSection />
    <ContactFormSection />
    <PartnerSlider />
    </>
  )
}

export default PracticeAreaPage
