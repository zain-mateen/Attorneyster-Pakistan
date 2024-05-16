import React from 'react'

import ThemeInput from '../../components/ThemeInput/ThemeInput'
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn'

import './PasswordProtection.scss'

import bg from '../../img/landing-hero-bg.png';

const PasswordProtection = () => {
    return (
        <section className='PasswordProtection_main'>
            <div className='container'>
                <div className='wrapper'>
                    <h1 className='heading heading-h1'>Protected Page</h1>
                    <p className='desc heading-m'>
                        This page is password protected. If you are the website admin, or have access to this page, please type your password below.
                    </p>
                    <ThemeInput 
                        inputClass="Password_Input"
                        inputType="Password"
                        inputName="Password"
                        inputPlaceholder="Enter Your Password"
                    />
                    <ThemeBtn 
                        ButtonClass="tertiary_btn"
                        ButtonText="Submit"
                    />
                </div>
            </div>
            <img className='bg' src={bg} alt='Bakground img' />
        </section>
    )
}

export default PasswordProtection
