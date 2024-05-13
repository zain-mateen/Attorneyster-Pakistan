import React from 'react';

import './Header.scss';

import Icon from '../../img/icon2.svg';
import bg from '../../img/practice-bg.png';

function HeaderInner(props) {
  return (
    <section className='Header_inner'>
        <div className='container'>
            <div className='wrapper'>
                <h1 className='heading heading-h1'>{props.WrapperHeading}</h1>
                <img className='icon' src={Icon} alt='icon' />
            </div>
        </div>
        <img className='bg' src={bg} alt='background img' />
    </section>
  )
}

export default HeaderInner
