import React from 'react'
import { Link } from 'react-router-dom';

import ThemeBtn from '../ThemeBtn/ThemeBtn';
import RangeSlider from './RangeSlider';

import './HistorySection.scss';

function Experience(props) {
    return (
        <div className={`${props.Experiene_class} col_experience_otr`}>
        <div className='col_experience_inr'>
            <div className='wrapper'>
                <h2 className={`${props.Experiene_heading} heading heading-h2`}>We Are Specialised And Experienced</h2>
                <img className='icon' src={props.Experience_icon} alt='Icon' />
                <p className={`${props.Experiene_heading} desc heading-m`}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti atque corrupti quos  molestias excepturi odio dignissimos ducimus qui blanditiis sint occaecati .
                </p>
            </div>
            <div className='Range_main'>
            <RangeSlider 
                RangeSlider_heading='Divorce And Family Cases'
                RangeSlider_value='75%'
                RangeSlider_range='range_75'
            />
            <RangeSlider 
                RangeSlider_heading='Property And Construction'
                RangeSlider_value='80%'
                RangeSlider_range='range_80'
            />
            <RangeSlider 
                RangeSlider_heading='Banking And Finance'
                RangeSlider_value='75%'
                RangeSlider_range='range_75'
            />
            <RangeSlider 
                RangeSlider_heading='Banking And Finance'
                RangeSlider_value='90%'
                RangeSlider_range='range_90'
            />
            </div>
            <Link className='action_otr' to='/contact'>
                <ThemeBtn 
                    ButtonClass='secondary_btn'
                    ButtonText="Free Consulting"
                />
            </Link>
        </div>
        </div>
    )
}

export default Experience
