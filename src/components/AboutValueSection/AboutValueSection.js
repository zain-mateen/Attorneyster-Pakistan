import React from 'react'
import './AboutValueSection.scss';
import AboutValueBox from './AboutValueBox';
import{ Scales, Sword, LockKey, Heart } from 'phosphor-react';


import Icon from '../../img/icon2.svg';
// import trazo from '../../img/trazo.svg';


const AboutValueSection = () => {
  return (
    <section className='AboutValue'>
        <div className='container'>
            <div className='row row_custom'>
                <div className='col-lg-5 col_content_otr'>
                    <div className='col_content_inr'>
                        <h2 className='heading heading-h2'>What We Offering Our Values</h2>
                        <img className='icon' src={Icon} alt='icon' />
                        <p className='desc heading-m'>
                            There are many variations of passages of Lorem Ipsum available, but  majority have su alteration in some form, by injected humour, randomised workds
                        </p>
                    </div>
                </div>
                <div className='col-lg-7 col_box_otr'>
                    <AboutValueBox 
                        AboutBoxIcon={<Scales size={32} weight="fill" />}
                        AboutBoxHeading="Direct Way Of Justice"
                    />
                    <AboutValueBox 
                        AboutBoxIcon={<LockKey size={32} weight="fill" />}
                        AboutBoxHeading="Protecting Your Business"
                    />
                    <AboutValueBox 
                        AboutBoxIcon={<Heart size={32} weight="fill" />}
                        AboutBoxHeading="Relationship Based On Trust"
                    />
                    <AboutValueBox 
                        AboutBoxIcon={<Sword size={32} weight="fill" />}
                        AboutBoxHeading="Fight For Justice"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutValueSection
