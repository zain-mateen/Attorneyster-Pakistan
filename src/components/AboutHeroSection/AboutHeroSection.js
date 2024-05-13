import React from 'react'
import { Link } from 'react-router-dom';

import { FacebookLogo, InstagramLogo, PinterestLogo, TwitterLogo } from 'phosphor-react';

import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './AboutHeroSection.scss';

import Icon from '../../img/icon2.svg';
import AboutImage from '../../img/About-hero-img.png';

const AboutHeroSection = () => {
    return (
        <div className='AboutHeroSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={AboutImage} alt='About Section ' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <img className='icon' src={Icon} alt='Icon' />
                            <h1 className='heading heading-h1'>I’m Peeter park, <br />a Business lawyer</h1>
                            <p className='desc heading-m'>
                                There are many variations of passages of Lorem Ipsum available, but  majority have su alteration in some form, by injected humour, randomised workds for which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>
                            <ul className='social_ul'>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <InstagramLogo size={24} weight='fill' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <FacebookLogo size={24} weight="fill" />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <TwitterLogo size={24} weight='fill' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <PinterestLogo size={24} weight='fill' />
                                    </a>
                                </li>
                            </ul>
                            <Link className='action_otr' to='/contact'>
                                <ThemeBtn 
                                    ButtonClass='white_btn'
                                    ButtonText='Get An Appoinment'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeroSection
