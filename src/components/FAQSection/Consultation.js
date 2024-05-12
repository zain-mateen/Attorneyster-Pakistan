import React from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './FAQSection.scss';
import { Link } from 'react-router-dom';

const Consultation = () => {
  return (
    <section className='Consultation_main'>
        <div className='container'>
            <div className='wrapper'>
                <h2 className='heading heading-h2'>Get a Free Consultation</h2>
                <p className='desc heading-m'>
                    There are  of Lorem Ipsum available, but the majority by injected humour  which don't look even.
                </p>
                <Link className='action_otr' to='/contact'>
                    <ThemeBtn 
                        ButtonClass="secondary_btn"
                        ButtonText="Contact Us"
                    />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Consultation
