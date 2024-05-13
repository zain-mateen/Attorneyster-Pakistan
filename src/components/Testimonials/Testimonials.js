import React from 'react'

import TestimonialsBox from './TestimonialsBox';

import './Testimonials.scss';

import Icon from '../../img/icon2.svg';

const Testimonials = () => {
    return (
        <section className='testimonails'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading heading-h2'>Client Opinions & Reviews</h2>
                    <img className='icon' src={Icon} alt='Icon' />
                </div>
                <div className='row row_custom'>
                    <TestimonialsBox 
                        TestimonailsBoxClass="col-lg-3 col-md-6 col-sm-6"
                    />
                    <TestimonialsBox 
                        TestimonailsBoxClass="col-lg-3 col-md-6 col-sm-6"
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
