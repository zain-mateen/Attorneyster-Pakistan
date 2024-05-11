import React from 'react'
import { Link } from 'react-router-dom';
import './PartnerSection.scss';


import Icon from '../../img/icon2.svg';
import PartnerLogo1 from '../../img/partner-logo1.svg';
import PartnerLogo2 from '../../img/partner-logo2.svg';
import PartnerLogo3 from '../../img/partner-logo3.svg';
import PartnerLogo4 from '../../img/partner-logo4.svg';
import PartnerLogo5 from '../../img/partner-logo5.svg';

const PartnerSlider = () => {
  return (
    <div className='partner_main'>
        <div className='container'>
            <div className='wrapper'>
                <span className='icon_otr'>
                    <img className='icon' src={Icon} alt='Icon' />
                </span>
                <h2 className='heading heading-h2'>Meet The Partners</h2>
                <span className='icon_otr'>
                    <img className='icon' src={Icon} alt='Icon' />
                </span>
            </div>
            <div className='PartnerLogo_main'>
                <Link className='Partnerlogo_otr'>
                    <img className='PartnerLogo' src={PartnerLogo1} alt='Partner Logo' />
                </Link>
                <Link className='Partnerlogo_otr'>
                    <img className='PartnerLogo' src={PartnerLogo2} alt='Partner Logo' />
                </Link>
                <Link className='Partnerlogo_otr'>
                    <img className='PartnerLogo' src={PartnerLogo3} alt='Partner Logo' />
                </Link>
                <Link className='Partnerlogo_otr'>
                    <img className='PartnerLogo' src={PartnerLogo4} alt='Partner Logo' />
                </Link>
                <Link className='Partnerlogo_otr'>
                    <img className='PartnerLogo' src={PartnerLogo5} alt='Partner Logo' />
                </Link>
            </div>
        </div>
    </div>  
  )
}

export default PartnerSlider
