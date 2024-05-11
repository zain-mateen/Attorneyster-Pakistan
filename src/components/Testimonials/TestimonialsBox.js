import React from 'react'
import { Link } from 'react-router-dom';


import QuotesIcon from '../../img/quotes-icon.svg'; 
import Creator from '../../img/Creator.png';


function TestimonialsBox(props) {
  return (
    <>
        <div className={`${props.TestimonailsBoxClass} col_box_otr`}>
            <div className='col_box_inr box_1'>
                <div className='box_otr'>
                    <div className='box_inr'>
                        <img className='icon' src={QuotesIcon} alt='Quotes icon' />
                        <p className='desc heading-m'>
                            There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                        </p>
                    </div>
                </div>
                <div className='profile_main'>
                    <Link to='/' className='profile_otr'>
                        <img className='profile' src={Creator} alt='Profile' />
                    </Link>
                    <div className='content'>
                        <a className='heading heading-name2' href='/'>Zain Mateen</a>
                        <p className='text heading-m'>Junior Lawyer</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${props.TestimonailsBoxClass} col_box_otr`}>
            <div className='col_box_inr box_2'>
                <div className='profile_main'>
                    <Link to='/' className='profile_otr'>
                        <img className='profile' src={Creator} alt='Profile' />
                    </Link>
                    <div className='content'>
                        <a className='heading heading-name2' href='/'>Zain Mateen</a>
                        <p className='text heading-m'>Junior Lawyer</p>
                    </div>
                </div>
                <div className='box_otr'>
                    <div className='box_inr'>
                        <img className='icon' src={QuotesIcon} alt='Quotes icon' />
                        <p className='desc heading-m'>
                            There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialsBox
