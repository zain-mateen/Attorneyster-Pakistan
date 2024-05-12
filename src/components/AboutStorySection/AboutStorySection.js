import React from 'react'
import './AboutStorySection.scss';

import Icon from '../../img/icon2.svg';
import AboutStoryImage1 from '../../img/About-story-img1.png';
import AboutStoryImage2 from '../../img/About-story-img2.png';
import AboutStoryImage3 from '../../img/About-story-img3.png';


const AboutStorySection = () => {
  return (
    <section className='AboutStorySection'>
        <div className='container'>
            <div className='wrapper'>
                <h2 className='heading heading-h2'>Our Story</h2>
                <img className='icon' src={Icon} alt='Icon' />
                <p className='desc heading-m'>
                    Since 2012, Solicians Law Firm has served over 2,500+ clients with <br />various law disputes. Our lawyers represent a wide range of clients, <br />but clients with complex legal issues and/or high conflict situations <br />will benefit most from our law firm.
                </p>
            </div>
            <div className='row row_custom'>
              <div className='col-lg-4 col-md-6 col-sm-6 col_img_otr'>
                <div className='col_img_inr'>
                  <img className='img' src={AboutStoryImage1} alt='About Story' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col_img_otr'>
                <div className='col_img_inr'>
                  <img className='img' src={AboutStoryImage2} alt='About Story' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col_img_otr'>
                <div className='col_img_inr'>
                  <img className='img' src={AboutStoryImage3} alt='About Story' />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutStorySection
