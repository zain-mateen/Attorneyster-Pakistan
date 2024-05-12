import React from 'react'
import './CasesPage.scss';
import PartnerSlider from '../PartnerSection/PartnerSlider';
import CasesBox from './CasesBox';
import HeaderInner from '../Header/HeaderInner';



import img1 from '../../img/cases-img.png';
import img2 from '../../img/cases-img2.png';
import img3 from '../../img/cases-img3.png';
import img4 from '../../img/cases-img4.png';
import img5 from '../../img/cases-img5.png';
import img6 from '../../img/cases-img6.png';

const CasesPage = () => {
  return (
    <>
    <HeaderInner 
      WrapperHeading="Recent Succesful Cases Results"
    />
    <section className='caseBox_main'>
      <div className='container'>
        <div className='row row_custom'>  
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img1}
            CasesBox_date="18-08-2020"
            CasesBox_heading="Gas Station Injury"
          />
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img2}
            CasesBox_date="22-08-2020"
            CasesBox_heading="Car Accident"
          />
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img3}
            CasesBox_date="14-07-2020"
            CasesBox_heading="Workplace Injury"
          />
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img4}
            CasesBox_date="25-09-2020"
            CasesBox_heading="Truck Accident"
          />
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img5}
            CasesBox_date="28-08-2020"
            CasesBox_heading="Construction Fall"
          />
          <CasesBox 
            CasesBoxClass="col-lg-6 col-md-6"
            CasesBox_img={img6}
            CasesBox_date="05-06-2020"
            CasesBox_heading="Wrongful Death"
          />
        </div>
      </div>
    </section> 
    <PartnerSlider />
    </>
  )
}

export default CasesPage
