import React from 'react';
import './Footer.scss';

import FooterIcon from '../../img/Icon3.svg';
import ResponsiveIcon from '../../img/icon.svg';
import BeandLogo from '../../img/brand-logo.png';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, PinterestLogo, TwitterLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='wrapper'>
                <div className='logo_main'>
                    <span>
                        <img className='img1' src={FooterIcon} alt='Icon' />
                        <img className='responsive1' src={ResponsiveIcon} alt='Icon' />
                    </span>
                    <Link className='logo_otr' to='/'>
                        <img className='logo' src={BeandLogo} alt='Brand LOGO' />
                    </Link>
                    <span>
                        <img className='img2' src={FooterIcon} alt='Icon' />
                        <img className='responsive2' src={ResponsiveIcon} alt='Icon' />
                    </span>
                </div>
            </div>
            <div className='row row_custom'>
                <div className='col-lg-4 col-md-6 col-sm-6 col_navigation_otr'>
                    <div className='col_navigation_inr'>
                        <div className='heading_otr'>
                            <h4 className='heading heading-h4'>Quick Link</h4>
                        </div>
                        <nav className='nav'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/'>
                                        <span>
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/about'>
                                        <span>
                                            About
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/contact'>
                                        <span>
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/blog'>
                                        <span>
                                            Blog
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/blogdetail'>
                                        <span>
                                            Blog Post
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m'>
                                        <span>
                                            Lawyers
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m'>
                                        <span>
                                            Lawyer Single
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/cases'>
                                        <span>
                                            Case Results
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Practice Areas
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/packages'>
                                        <span>
                                            Packages
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/packages'>
                                        <span>
                                            Package Single
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col_navigation_otr'>
                    <div className='col_navigation_inr'>
                        <div className='heading_otr'>
                            <h4 className='heading heading-h4'>Utility Page</h4>
                        </div>
                        <nav className='nav'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/'>
                                        <span>
                                            Start Here
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m'>
                                        <span>
                                            Style Guide
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/error'>
                                        <span>
                                            404 Not Found
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/password_protection'>
                                        <span>
                                            Password Protected
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/lisences'>
                                        <span>
                                            Licenses
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/changelog'>
                                        <span>
                                            Changelog
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6 col-sm-6 col_navigation_otr'>
                    <div className='col_navigation_inr'>
                        <div className='heading_otr'>
                            <h4 className='heading heading-h4'>Practice Area</h4>
                        </div>
                        <nav className='nav'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Faimly Law
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Criminal Law
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Personal Injury
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Real Estate Law
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu-linkk heading-m' to='/practiceareapage'>
                                        <span>
                                            Business Law
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col_contact_otr'>
                    <div className='col_contact_inr'>
                        <div className='heading_otr'>
                            <h4 className='heading heading-h4'>Conatct Us</h4>
                        </div>
                        <Link className='contact_otr'>
                            <p className='heading-m text'>
                                Head Office Address 121 King Street, Melbourne West,Australia
                            </p>
                        </Link>
                        <a href='tel:03221713121' className='contact_otr'>
                            <p className='heading-m text'>
                                Phone : 0322-1713121
                            </p>
                        </a>
                        <a href='mailto:zainmateen259@gmail.com' className='contact_otr'>
                            <p className='heading-m text'>
                                Email : zainmateen259@gmail.com
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='copyright_inr'>
                    <div className='text_otr'>
                        <p className='text heading-m'>Copyright © 
                            <Link className='text_inr heading-mb'>Attorneyster</Link>
                            | Designed by 
                            <a className='text_inr heading-mb' href='/'> Zain Mateen</a>
                        </p>
                    </div>
                    <div className='social_main'>
                        <p className='text heaing-m'>Follow : </p>
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
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
