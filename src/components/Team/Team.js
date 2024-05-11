import React from 'react'
import { Link } from 'react-router-dom';
import './Team.scss';

import Icon from '../../img/icon2.svg';
import Creator1 from '../../img/Creator-main.png';
import Creator2 from '../../img/Creator-main2.png';
import Creator3 from '../../img/Creator-main3.png';
import Creator4 from '../../img/Creator-main4.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { FacebookLogo, InstagramLogo, PinterestLogo, TwitterLogo } from '@phosphor-icons/react';

const Team = () => {
  return (
    <section className='Team'>
        <div className='container'>
          <div className='wrapper'>
            <h2 className='heading heading-h2'>Our Experienced Attorney Are Ready <br />To answer any questions</h2>
            <img className='icon' src={Icon} alt='img' />
          </div>
          <div className='row row_custom'>
            <div className='col-lg-3 col-md-6 col-sm-6 col_box_otr'>
              <div className='col_box_inr'>
                <Link className='img_otr'>
                  <img className='img' src={Creator1} alt='' />
                  <div className='hover_otr'>
                    <ul className='social_ul'>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <InstagramLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <FacebookLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <TwitterLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <PinterestLogo size={32} weight="fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className='content_otr'>
                  <Link className='heading heading-h4'>Zain Mateen</Link>
                  <p className='text heading-m'>Civil Attorney</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col_box_otr'>
              <div className='col_box_inr'>
                <Link className='img_otr'>
                  <img className='img' src={Creator2} alt='' />
                  <div className='hover_otr'>
                    <ul className='social_ul'>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <InstagramLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <FacebookLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <TwitterLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <PinterestLogo size={32} weight="fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className='content_otr'>
                  <Link className='heading heading-h4'>Zain Mateen</Link>
                  <p className='text heading-m'>Civil Attorney</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col_box_otr'>
              <div className='col_box_inr'>
                <Link className='img_otr'>
                  <img className='img' src={Creator3} alt='' />
                  <div className='hover_otr'>
                    <ul className='social_ul'>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <InstagramLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <FacebookLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <TwitterLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <PinterestLogo size={32} weight="fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className='content_otr'>
                  <Link className='heading heading-h4'>Zain Mateen</Link>
                  <p className='text heading-m'>Civil Attorney</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col_box_otr'>
              <div className='col_box_inr'>
                <Link className='img_otr'>
                  <img className='img' src={Creator4} alt='' />
                  <div className='hover_otr'>
                    <ul className='social_ul'>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <InstagramLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <FacebookLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <TwitterLogo size={32} weight="fill" />
                        </a>
                      </li>
                      <li className='social_li'>
                        <a className='social_a' href='/' >
                          <PinterestLogo size={32} weight="fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
                <div className='content_otr'>
                  <Link className='heading heading-h4'>Zain Mateen</Link>
                  <p className='text heading-m'>Civil Attorney</p>
                </div>
              </div>
            </div>
          </div>
          <Link className='action_otr' to='/contact'>
            <ThemeBtn 
              ButtonClass="border_btn"
              ButtonText="Meet Attorney"
            />
          </Link>
        </div>
    </section>
  )
}

export default Team
