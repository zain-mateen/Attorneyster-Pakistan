import React from 'react'
import './HistorySection.scss';

function RangeSlider(props) {
  return (
    <div className='Range_otr'>
        <div className='content_otr'>
            <p className={`${props.Range_heading} rangeSlider_heading heading-m`}>{props.RangeSlider_heading}</p>
            <p className={`${props.Range_value} rangeSlider_value heading-m`}>{props.RangeSlider_value}</p>
        </div>
        <div className='Range_slider_otr'>
            <div className={`${props.RangeSlider_range}`}>
                <div className='circle'></div>
            </div>
        </div>
    </div>
  )
}

export default RangeSlider
