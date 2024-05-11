import React from 'react'
import './ContactFormSection.scss';
import ThemeInput from '../ThemeInput/ThemeInput';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

const ContactFormSection = () => {
  return (
    <section className='ContactForm'>
        <div className='container'>
            <div className='wrapper'>
                <form className='form_inr'>
                    <div className='input_main'>
                        <div className='input_otr'>
                            <ThemeInput
                                inputClass="Input"
                                inputName="name"
                                inputType="name"
                                inputPlaceholder="Full Name *"
                             />
                        </div>
                        <div className='input_otr'>
                            <ThemeInput
                                inputClass="Input"
                                inputName="email"
                                inputType="email"
                                inputPlaceholder="Email Address *"
                             />
                        </div>
                    </div>
                    <div className='input_main'>
                        <div className='input_otr'>
                            <ThemeInput
                                inputClass="Input"
                                inputName="phone"
                                inputType="tel"
                                inputPlaceholder="Phone Number *"
                             />
                        </div>
                        <div className='input_otr'>
                            <ThemeInput
                                inputClass="Input"
                                inputName="text"
                                inputType="text"
                                inputPlaceholder="Subject *"
                             />
                        </div>
                    </div>
                    <textarea className='Input text_area' name="subject" placeholder='Your Message *' />
                    <div className='action_otr'>
                        <ThemeBtn 
                            ButtonClass="white_btn"
                            ButtonText="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactFormSection
