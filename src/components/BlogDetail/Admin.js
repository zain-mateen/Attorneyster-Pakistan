import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramLogo, FacebookLogo, TwitterLogo } from 'phosphor-react';
import './BlogDetail.scss';


import Creator from '../../img/Creator.png';


const Admin = () => {
  return (
    <section className='Admin'>
        <div className='container'>
            <div className='wrapper'>
                <Link className='profile_otr'>
                    <img className='profile' src={Creator} alt='Profile' />
                </Link>
                <div className='content_otr'>
                    <Link className='heading heading-h2'>Zain Mateen</Link>
                    <p className='desc heading-m'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has   readable English. 
                    </p>
                    <ul className='social_ul'>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <InstagramLogo size={24} weight="fill" />
                            </a>
                        </li>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <FacebookLogo size={24} weight="fill" />
                            </a>
                        </li>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <TwitterLogo size={24} weight="fill" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='responsive_wrapper'>
                <div className='profile_main'>
                    <Link className='profile_otr'>
                        <img className='profile' src={Creator} alt='Profile' />
                    </Link>
                    <Link className='heading heading-h2'>Zain Mateen</Link>
                </div>
                <div className='Admin_responsive_content_otr'>
                    <p className='desc heading-m'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has   readable English. 
                    </p>
                    <ul className='social_ul'>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <InstagramLogo size={24} weight="fill" />
                            </a>
                        </li>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <FacebookLogo size={24} weight="fill" />
                            </a>
                        </li>
                        <li className='social_li'>
                            <a className='social_a' href='/' >
                                <TwitterLogo size={24} weight="fill" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Admin
