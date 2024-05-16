import React, { Fragment } from 'react'

import HeaderInner from '../../components/Header/HeaderInner';
import PracticeAreas from '../../components/PracticeAreas/PracticeAreas';
import ContactSection from '../../components/ContactSection/ContactSection';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection';
import PartnerSlider from '../../components/PartnerSection/PartnerSlider';

import './PracticeAreaPage.scss';

const PracticeAreaPage = () => {
  return (
    <Fragment>
      <HeaderInner 
        WrapperHeading="Practice Area’s"
      />
      <PracticeAreas />
      <ContactSection />
      <ContactFormSection />
      <PartnerSlider />
    </Fragment>
  )
}

export default PracticeAreaPage
