import React from 'react'
import './PricingPage.scss';

import icon from '../../img/guarrenty-icon.svg';

const OfferBanner = () => {
  return (
    <section className='OfferBanner'>
        <div className='container'>
            <div className='wrapper'>
                <div className='content'>
                    <div className='icon_otr'>
                        <img className='icon' src={icon} alt='icon' />
                    </div>
                    <h1 className='heading heading-h1'>No Fee Guarantee®</h1>
                    <p className='desc heading-lb'>We'll win your injury case, or it's free.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OfferBanner
