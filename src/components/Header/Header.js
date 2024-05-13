import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

import { CaretDown, EnvelopeOpen, FacebookLogo, InstagramLogo, List, PhoneCall, PinterestLogo, Plus, TwitterLogo } from '@phosphor-icons/react';

import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './Header.scss';

import BrandLogo from '../../img/brand-logo.png';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className='header'>
            <div className='header_top_otr'>
                <div className='container'>
                    <div className='header_top'>
                        <div className='logo_menu_otr'>
                            <Link to='/' className='logo_otr'>
                                <img className='brand_logo' src={BrandLogo} alt='Brand LOGO' />
                            </Link>
                            <Button className='menu_icon_otr' variant="primary" onClick={handleShow}>
                                <List size={24} />
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <Link to='/' className='logo_inr'>
                                            <img className='brand_logo' src={BrandLogo} alt='Brand LOGO' />
                                        </Link>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Accordion>
                                        <Link className='menu_dropdown_Linkk heading-m' to="/">
                                            <span>
                                                Home
                                            </span>
                                        </Link>
                                        <Link className='menu_dropdown_Linkk heading-m' to="/about">
                                            <span>
                                                About Us
                                            </span>
                                        </Link>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <span className='heading-m'>Pages</span>
                                                <div className='icon_otr'>
                                                    <CaretDown size={20} width='bold' />
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='drop_ul'>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/blog">
                                                            <span>
                                                                Blog
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/practiceareapage">
                                                            <span>
                                                                Practies Areas 
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/cases">
                                                            <span>
                                                                Cases
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/packages">
                                                            <span>
                                                                Packages
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/testimonials">
                                                            <span>
                                                                Testimonials
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <span className='heading-m'>Other Pages</span>
                                                <div className='icon_otr'>
                                                    <CaretDown size={20} width='bold' />
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="drop_ul">
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/lisences">
                                                            <span>
                                                                Licenses
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/changelog">
                                                            <span>
                                                                Change Log
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/password_protection">
                                                            <span>
                                                                Password Protection
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className='drop_li'>
                                                        <Link className='menu_linkk heading-s' to="/error">
                                                            <span>
                                                                404 Not Found
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Link className='menu_dropdown_Linkk heading-m' to="/contact">
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </Accordion>
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
                                    <div className='action_main'>
                                        <div className='action_otr'>
                                            <Link className='explore_otr' to='/contact'>
                                                <ThemeBtn
                                                    ButtonClass="primary_btn"
                                                    ButtonText="Book a Consultation"
                                                />
                                            </Link>
                                        </div>
                                        <div className='action_otr'>
                                            <Link className='explore_otr' to='/contact'>
                                                <ThemeBtn
                                                    ButtonClass="primary_btn"
                                                    ButtonText="Book a Consultation"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header_bottom_otr'>
                <div className='container'>
                    <div className='header_bottom'>
                        <nav className='nav'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-l' to="/">
                                        <span>
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-l' to="/about">
                                        <span>
                                            About Us
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <p className='menu_linkk heading-l'>
                                        <span>
                                            Pages
                                        </span>
                                        <Plus size={24} />
                                    </p>
                                    <div className='menu_dropdown_otr'>
                                        <div className='menu_dropdown_inr'>
                                            <ul className='menu_dropdown_ul'>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m' to="/blog">
                                                        <span>
                                                            Blog
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m' to="/practiceareapage">
                                                        <span>
                                                            Practies Areas 
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m' to="/cases">
                                                        <span>
                                                            Cases
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m' to="/packages">
                                                        <span>
                                                            Packages
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m' to="/testimonials">
                                                        <span>
                                                            Testimonials
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-m'>
                                                        <span>
                                                            Other Page
                                                        </span>
                                                        <Plus size={20} />
                                                    </Link>
                                                    <div className='menu_otherdropdown_otr'>
                                                        <div className='menu_otherdropdown_inr'>
                                                            <ul className='menu_otherdropdown_ul'>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-m' to="/lisences">
                                                                        <span>
                                                                            Lisences
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-m' to="/changelog">
                                                                        <span>
                                                                            Change Log
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-m' to="/password_protection">
                                                                        <span>
                                                                            Password Protection
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-m' to="/error">
                                                                        <span>
                                                                            404 Not Found
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-l' to="/contact">
                                        <span>
                                            Contact Us
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='action_main'>
                            <a href='tel:03221713121' className='phone_otr'>
                                <div className='icon_otr'>
                                    <PhoneCall size={24} weight="fill" />
                                </div>
                                <div className='content'>
                                    <p className='heading heading-sb'>Call Us On:</p>
                                    <p className='text heading-l'>0322-1713121</p>
                                </div>
                            </a>
                            <a href='mailto:zainmateen259@gmail.com' className='mail_otr'>
                                <div className='icon_otr'>
                                    <EnvelopeOpen size={24} weight="fill" />
                                </div>
                                <div className='content'>
                                    <p className='heading heading-sb'>Email us:</p>
                                    <p className='text heading-l'>zainmateen259@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
