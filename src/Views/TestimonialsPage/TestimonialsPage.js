import React, { Fragment } from 'react'

import TestimonialsPageBox from './TestimonialsPageBox';
import ContactSection from '../../components/ContactSection/ContactSection';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection';


import './TestimonialsPage.scss';

import Creator from '../../img/Creator.png';
import HeaderInner from '../../components/Header/HeaderInner';

const TestimonialsPage = () => {
    return (
        <Fragment>
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
            
        </Fragment>
    )
}

export default TestimonialsPage
