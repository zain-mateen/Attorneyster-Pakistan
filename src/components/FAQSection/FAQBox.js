import React from 'react'
import './FAQSection.scss';


function FAQBox(props) {
  return (
    <div className={`${props.FAQBox_Class} FAQBox_otr`}>
        <div className='FAQBox_inr'>
            <h2 className='heading heading-h2'>{props.FAQBox_Heading}</h2>
            <p className='desc heading-m'>
                {props.FAQBox_Desc}
            </p>
        </div>
    </div>
  )
}

export default FAQBox
