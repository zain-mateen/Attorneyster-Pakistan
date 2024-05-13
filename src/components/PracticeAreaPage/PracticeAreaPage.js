import React, { Fragment } from 'react'

import HeaderInner from '../Header/HeaderInner';
import PracticeAreas from '../PracticeAreas/PracticeAreas';
import ContactSection from '../ContactSection/ContactSection';
import ContactFormSection from '../ContactFormSection/ContactFormSection';
import PartnerSlider from '../PartnerSection/PartnerSlider';

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
