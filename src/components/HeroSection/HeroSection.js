import React from 'react'
import './HeroSection.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';


import BackgroundImage from '../../img/landing-hero-bg.png';
import Icon from '../../img/icon.svg';
import Image from '../../img/landing-hero-img.png';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className='HeroSection'>
        <div className='container'>
          <div className='row row_custom'>
            <div className='col-lg-6 col_content_otr'>
              <div className='col_content_inr'>
                <img className='icon' src={Icon} alt='Icon' />
                <h1 className='heading heading-h1'>Deeper Understanding <br />Better Solutions</h1>
                <p className='heading heading-m'>
                  It is a long established fact that a reader will be distracted by the readable content of a looking at its layout.
                </p>
                <Link className='action_otr' to='/contact'>
                  <ThemeBtn
                      ButtonClass="secondary_btn"
                      ButtonText="Get In Touch"
                  />
                </Link>
              </div>  
            </div>
            <div className='col-lg-6 col_img_otr'>
              <div className='col_img_inr'>
                <img className='img' src={Image} alt='img' />
              </div>
            </div>
          </div>
        </div>
        <img className='pos_img' src={BackgroundImage} alt='Background img' />
    </section>
  )
}

export default HeroSection
