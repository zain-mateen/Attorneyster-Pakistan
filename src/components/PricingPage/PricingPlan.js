import React from 'react'
import './PricingPage.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function PricingPlan(props) {
  return (
    <div className={`${props.PlanClass} Plan_otr`}>
        <div className='Plan_inr'>
            <div className='content'>
                <h2 className='heading heading-h2'>{props.PlanHeading}</h2>
                <p className='text heading-s'>{props.PlanText}</p>
            </div>
            <div className='Price_List_Btn'>
                <div className='Price_main'>
                    <h2 className='heading heading-h2'>{props.PlanPrice}</h2>
                    <p className='case_btn heading-s'>Per Case</p>
                </div>
                <ul className='plan_ul'>
                    <li className='plan_li heading-m'>
                        {props.PlanType1}
                    </li>
                    <li className='plan_li heading-m'>
                        {props.PlanType2}
                    </li>
                    <li className='plan_li heading-m'>
                        {props.PlanType3}
                    </li>
                    <li className='plan_li heading-m'>
                        {props.PlanType4}
                    </li>
                    <li className='plan_li heading-m'>
                        {props.PlanType5}
                    </li>
                </ul>
                <div className='action_otr'>
                    <ThemeBtn 
                        ButtonClass="border2_btn"
                        ButtonText="Get Started"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingPlan
