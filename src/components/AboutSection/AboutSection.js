import React from 'react'
import { Link } from 'react-router-dom';

import './AboutSection.scss';

import AboutSectionImage1 from '../../img/about-section-img.png';
import AboutSectionImage2 from '../../img/about-section-img2.png';
import Icon from '../../img/icon.svg';
import Creator from '../../img/Creator.png';

const AboutSection = () => {
    return (
        <section className='AboutSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-4 col_img_otr'>
                        <div className='col_img_inr'>
                            <Link to='/' className='img_otr'>
                                <img className='img' src={AboutSectionImage1} alt='About Section Image1' />
                            </Link>
                            <Link to='/' className='img_otr'>
                                <img className='img' src={AboutSectionImage2} alt='About Section Image1' />
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-8 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading heading-h2'>The Simple Choice <br />for Complex Litigation</h2>
                            <img className='img' src={Icon} alt='Icon' />
                            <p className='desc heading-m'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir randomised workds which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>
                            <div className='profile_main'>
                                <Link to='/' className='profile_otr'>
                                    <img className='profile' src={Creator} alt='Profile' />
                                </Link>
                                <Link to='/' className='content'>
                                    <h4 className='heading heading-name'>Zain Mateen</h4>
                                </Link>
                            </div>
                            <div className='box_main'>
                                <div className='box_otr'>
                                    <div className='box_inr'>
                                        <div className='icon_otr'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" fill="none"><path stroke="#D1B06B" stroke-width="2" d="m51.93 5.367-3.844 8.485a3 3 0 0 0-.268 1.238v37.85a2 2 0 0 0 2 2h5.136a2 2 0 0 0 2-2V15.09a3 3 0 0 0-.268-1.238l-3.844-8.485a.5.5 0 0 0-.911 0ZM47.818 15.09h9.136"/><rect width="28.004" height="2.334" x="6.834" y="25.144" fill="#D1B06B" rx="1.167"/><rect width="10.168" height="7.834" x="8.168" y="8.976" stroke="#D1B06B" stroke-width="2" rx="1.5"/><rect width="28.004" height="2.334" x="6.834" y="36.813" fill="#D1B06B" rx="1.167"/><rect width="17.502" height="2.334" x="6.834" y="42.647" fill="#D1B06B" rx="1.167"/><rect width="28.004" height="2.334" x="6.834" y="30.979" fill="#D1B06B" rx="1.167"/><path stroke="#D1B06B" stroke-width="2" d="M47.818 49.83h9.136M1 8.808v39.385a7 7 0 0 0 7 7h26.26a7 7 0 0 0 7-7V16.536a7 7 0 0 0-2.323-5.21L30.327 3.6a7 7 0 0 0-4.675-1.791H8a7 7 0 0 0-7 7Z"/><path stroke="#D1B06B" stroke-linecap="round" stroke-width="2" d="M25.98 2.025v9.672a4 4 0 0 0 4 4h10.31"/></svg>
                                        </div>
                                        <div className='content'>
                                            <p className='text heading-l'>95% <br />Case Success</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='box_otr'>
                                    <div className='box_inr'>
                                        <div className='heading_otr'>
                                            <p className='heading heading-h4'>35+</p>
                                        </div>
                                        <div className='content'>
                                            <p className='text heading-l'>Years <br />Experiance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
