import React from 'react'

import { Heart, Star } from '@phosphor-icons/react';

import PartnerSlider from './PartnerSlider';

import './PartnerSection.scss';

import Icon from '../../img/icon2.svg';
import Circle1 from '../../img/circle1.svg';
import Circle2 from '../../img/circle2.svg';

const PartnerSection = () => {
    return (
        <section className='PartnerSection'>
            <div className='success_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading heading-h2'>If you're in trouble <br />we can help.</h2>
                        <img className='icon' src={Icon} alt='Icon' />
                        <p className='dessc heading-m'>
                            There are  of Lorem Ipsum available, but the majority have su alteration in some <br />form, by injected humour, oir  which don't look even slightly believable.
                        </p>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col_box_otr'>
                            <div className='col_box_inr box_1'>
                                <div className='icon_otr'>
                                    <img className='circle' src={Circle1} alt='Cicle' />
                                    <div className='icon_content'>
                                        <Heart size={24} weight='fill' />
                                        <h4 className='heading heading-h4'>7230</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <h4 className='heading heading-h4'>Trusted Clients</h4>
                                    <p className='text heading-m'>There are  of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col_box_otr'>
                            <div className='col_box_inr box_2'>
                                <div className='icon_otr'>
                                    <img className='circle' src={Circle2} alt='Cicle' />
                                    <div className='icon_content'>
                                        <Star size={24} weight='fill' />
                                        <h4 className='heading heading-h4'>98%</h4>
                                    </div>
                                </div>
                                <div className='content'>
                                    <h4 className='heading heading-h4'>Successful Cases</h4>
                                    <p className='text heading-m'>There are  of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col_img_otr'>
                            <div className='col_img_inr'>
                                <h4 className='heading heading-h4'>15,890+</h4>
                                <p className='text heading-m'>Criminal Defense <br />Case Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <PartnerSlider />
        </section>
    )
}

export default PartnerSection
