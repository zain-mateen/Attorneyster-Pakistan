import React from 'react'
import './TestimonialsPage.scss';
import TestimonialsPageBox from './TestimonialsPageBox';
import ContactSection from '../ContactSection/ContactSection';
import ContactFormSection from '../ContactFormSection/ContactFormSection';



import Creator from '../../img/Creator.png';
import HeaderInner from '../Header/HeaderInner';


const TestimonialsPage = () => {
  return (
    <>
        <HeaderInner 
            WrapperHeading="Testimonials"
        />

        <section className='Box_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="Consultant"
                    />
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="Developer"
                    />
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="CEO"
                    />
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="Designer"
                    />
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="Consultant"
                    />
                    <TestimonialsPageBox 
                        BoxClass="col-lg-6"
                        CreatorProfile={Creator}
                        CreatorName="Zain Mateen"
                        CreatorProfession="Consultant"
                    />
                </div>
            </div>
        </section>

        <ContactSection />

        <ContactFormSection />
        
    </>
  )
}

export default TestimonialsPage
