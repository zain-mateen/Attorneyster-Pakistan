import React from 'react'
import './CasesPage.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import { Link } from 'react-router-dom';

function CasesBox(props) {
  return (
    <div className={`${props.CasesBoxClass} col_box_otr`}>
        <div className='col_box_inr'>
            <Link className='img_otr' to='/casesInner'>
                <img className='img' src={props.CasesBox_img} alt='img' />
                <ThemeBtn 
                    ButtonClass='tertiary_btn img_center_btn'
                    ButtonText='$18 Million'
                />
            </Link>
            <div className='content_otr'>
                <p className='date heading-m'>{props.CasesBox_date}</p>
                <Link className='heading heading-h4' to='/casesInner'>{props.CasesBox_heading}</Link>
                <p className='desc heading-m'>
                    There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                </p>
                <div className='action_otr'>
                    <Link className='read_btn heading-l' to='/casesInner'>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CasesBox
