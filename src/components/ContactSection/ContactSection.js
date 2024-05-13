import React from 'react'
import { Link } from 'react-router-dom';

import { Phone } from '@phosphor-icons/react';

import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './ContactSection.scss';

const ContactSection = () => {
    return (
        <section className='ContactSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_contact_otr'>
                        <div className='col_contact_inr'>
                            <h2 className='heading heading-h2'>Our Expert professional law team is always ready to serve you the best solution!</h2>
                            <p className='desc heading-m'>
                                There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                            </p>
                            <Link className='action_otr' to='/contact'>
                                <ThemeBtn
                                    ButtonClass="secondary_btn"
                                    ButtonText="Contact Us"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col_box_otr'>
                        <div className='col_box_inr'>
                            <div className='box_inr'>
                                <h2 className='heading heading_h2'>Get a Free Consultation</h2>
                                <p className='desc heading-m'>
                                    There are  of Lorem Ipsum available, but the majority by injected humour  which don't look even.
                                </p>
                                <a className='contact_main' href='tel:03221713121'>
                                    <div className='icon_otr'>
                                        <Phone size={24} weight='fill' />
                                    </div>
                                    <div className='content'>
                                        <p className='text heading-s'>Call Us On:</p>
                                        <h4 className='heading heading-h4'>0322-1713121</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
