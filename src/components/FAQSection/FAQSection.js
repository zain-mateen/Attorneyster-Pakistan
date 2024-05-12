import React from 'react'
import './FAQSection.scss';
import Consultation from './Consultation';


import Icon from '../../img/icon2.svg';
import FAQBox from './FAQBox';


const FAQSection = () => {
  return (
    <>
    <section className='FAQSection_main'>
        <div className='container'>
            <div className='wrapper'>
                <h2 className='heading heading-h2'>FAQ Simple</h2>
                <img className='icon' src={Icon} alt='Icon' />
            </div>
            <div className='row row_custom'>
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="What types of cases does your law firm handle?"
                    FAQBox_Desc="At Attorney Law Firm we handle claims at all levels of litigation. Our areas of practice include Business Law, Employment and Labor Law, Intellectual Property/Technology Transactions, and Litigation another attorney may perform certain duties within the case itself."
                />
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="How will I know which attorney in the group is best for me?"
                    FAQBox_Desc="Our leadership team at the Thurman Law firm will determine which attorney can best represent you in handling your case. It may not be possible, or advantageous, to have one attorney handle all of your legal matters of the case, but from time to time."
                />
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="How can I avoid being sued if a claim is made against me?"
                    FAQBox_Desc="No one can stop a lawsuit from being filed. However, if there is a legitimate dispute that arises and a claim made against you, consult a lawyer behind-the-scenes work is being completed so that on the day your matter is ready, nothing will be overlooked."
                />
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="What is the difference between divorce and legal separation?"
                    FAQBox_Desc="In addition to ending your marriage, a divorce addresses all issues within the marriage, including property, finances, and child-related issues. This is the most common way to deal with marital issues, as Florida does not recognize legal separation."
                />
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="Why should I have a lawyer representing me during divorce?"
                    FAQBox_Desc="While many individuals proceed through the divorce process, having the help of an attorney with family law experience can go a long way toward protecting your interests. Florida’s family laws have developed over many decades and are complicated."
                />
                <FAQBox 
                    FAQBox_Class="col-lg-6"
                    FAQBox_Heading="Do I need an attorney to start a business?"
                    FAQBox_Desc="There are certain matters that are fairly straightforward or not unduly difficult to learn and, therefore, do not require the services of an attorney, like writing a business plan, researching and picking a name for your business or reserving a domain."
                />
            </div>
            q<Consultation />
        </div>
    </section>
    </>
  )
}

export default FAQSection
