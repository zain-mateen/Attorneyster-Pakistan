import React from 'react'
import './ContactPage.scss';
import HeaderInner from '../Header/HeaderInner';
import FAQSection from '../FAQSection/FAQSection';
import { Envelope, Phone } from 'phosphor-react';
import ThemeInput from '../ThemeInput/ThemeInput';
import ThemeBtn from '../ThemeBtn/ThemeBtn';



const ContactPage = () => {
  return (
    <>
        <HeaderInner 
            WrapperHeading="Contact Us"
        />

        <section className='Contact_main'>
            <div className='container'>
                <div className='address_main'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 box_otr'>
                            <div className='box_inr'>
                                <h4 className='heading heading-h4'>Say Hello To Peeter</h4>
                                <p className='desc heading-m'>
                                    There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 box_otr'>
                            <div className='box_inr2'>
                                <h4 className='heading heading-h4'>Las Vegas</h4>
                                <div className='action_main'>
                                    <a href='mailto:zainmateen259@gmail.com' className='Link heading-l'>
                                        zainmateen259@gmail.com
                                    </a>
                                    <a href='tel:03221713121' className='Link heading-l'>
                                        0322-1713121
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 box_otr'>
                            <div className='box_inr2'>
                                <h4 className='heading heading-h4'>New York</h4>
                                <div className='action_main'>
                                    <a href='mailto:zaini_2223@yahoo.com' className='Link heading-l'>
                                        zaini_2223@yahoo.com
                                    </a>
                                    <a href='tel:03221713121' className='Link heading-l'>
                                        0347-1883772
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className='Form_otr'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_input_otr'>
                            <div className='col_input_inr'>
                                <div className='input_main'>
                                    <div className='input_otr'>
                                        <ThemeInput
                                            inputClass="Input"
                                            inputName="name"
                                            inputType="name"
                                            inputPlaceholder="Your Name Here"
                                        />
                                    </div>
                                    <div className='input_otr'>
                                        <ThemeInput
                                            inputClass="Input"
                                            inputName="email"
                                            inputType="email"
                                            inputPlaceholder="Your Mail Here"
                                        />
                                    </div>
                                    <div className='input_otr'>
                                        <ThemeInput
                                            inputClass="Input"
                                            inputName="phone"
                                            inputType="tel"
                                            inputPlaceholder="Your Phone Number"
                                        />
                                    </div>
                                    <div className='input_otr'>
                                        <ThemeInput
                                            inputClass="Input"
                                            inputName="text"
                                            inputType="text"
                                            inputPlaceholder="What Service You Want"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col_message_otr'>
                            <div className='col_message_inr'>
                                <textarea className='Input text_area' name="subject" placeholder='Your Message' />
                                <div className='action_otr'>
                                    <ThemeBtn 
                                        ButtonClass="secondary_btn"
                                        ButtonText="Send Messsage"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='mail_phone_main'>
                    <div className='mail_phone_inr'>
                        <div className='action_main'>
                            <a href='tel:03221713121' className='phone_otr'>
                                <div className='icon_otr'>
                                    <Phone size={24} weight="fill" />
                                </div>
                                <div className='content'>
                                    <p className='heading heading-sb'>Call Us On:</p>
                                    <p className='text heading-l'>0322-1713121</p>
                                </div>
                            </a>
                            <a href='mailto:zainmateen259@gmail.com' className='mail_otr'>
                                <div className='icon_otr'>
                                    <Envelope size={24} weight="fill" />
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
        </section>

        <FAQSection />
    </>
  )
}

export default ContactPage
