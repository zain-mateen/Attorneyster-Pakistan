import React from 'react'
import './PracticeAreas.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';

function PracticeAreasBox(props) {
  return (
    <div className={`${props.PracticeAreasBox} PracticeBox_otr`}>
        <div className='PracticeBox_inr'>
            <Link className='heading-h4 box_heading' to="/practiceareasingle">{props.BoxHeading}</Link>
            <p className='desc heading-m'>
                There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.
            </p>
            <div className='icon_btn_main'>
                <div className='icon_otr'>
                    {props.BoxIcon}
                </div>
                <Link className='LearnMore_btn' to='/practiceareasingle'>
                    <ThemeBtn 
                        ButtonClass="tertiary_btn"
                        ButtonText="Learn More"
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PracticeAreasBox
