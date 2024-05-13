import React from 'react'
import { Link } from 'react-router-dom';

import './TestimonialsPage.scss';

import Quotes from '../../img/quotes-icon.svg';

function TestimonialsPageBox(props) {
    return (
        <div className={`${props.BoxClass} col_box_otr`}>
            <div className='col_box_inr'>
                <div className='profile_quotes_main'>
                    <div className='profile_main'>
                        <Link className='profile_otr' >
                            <img className='profile' src={props.CreatorProfile} alt='Creator' />
                        </Link>
                        <div className='content'>
                            <Link className='heading heading-h4' >{props.CreatorName}</Link>
                            <p className='text heading-m'>{props.CreatorProfession}</p>
                        </div>
                    </div>
                    <div className='quotes_main'>
                        <img className='icon' src={Quotes} alt='Quotees Icon' />
                    </div>
                </div>
                <div className='content_otr'>
                    <p className='desc heading-m'>
                        There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.when an unknown printer took a galley of type and scrambled.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsPageBox
