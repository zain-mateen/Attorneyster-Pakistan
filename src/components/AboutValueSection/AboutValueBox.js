import React from 'react'
import { Link } from 'react-router-dom'

function AboutValueBox(props) {
  return (
    <div className='AboutBox_otr'>
      <div className='AboutBox_inr'>
        <div className='icon_otr'>
            {props.AboutBoxIcon}
        </div>
        <Link className='AboutBox_heading heading-h4'>{props.AboutBoxHeading}</Link>
        <p className='desc heading-m'>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially .
        </p>
      </div>
    </div>
  )
}

export default AboutValueBox
