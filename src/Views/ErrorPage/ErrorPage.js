import React from 'react'
import { Link } from 'react-router-dom';

import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';

import './ErrorPage.scss';

import Icon from '../../img/icon2.svg';
import ErrorImage from '../../img/404.svg';

const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
        <div className='container_fluid'>
            <div className='wrapper'>
                <div className='img_otr'>
                  <img className='img' src={ErrorImage} alt='404 Error' />
                </div>
                <img className='icon' src={Icon} alt='Icon' />
                <h1 className='heading heading-h1'>Page Not Found</h1>
                <p className='desc heading-m'>The page you are looking for doesn't exist or has been moved.</p>
                <Link className='action_otr' to='/'>
                  <ThemeBtn 
                    ButtonClass="secondary_btn"
                    ButtonText="Back to Home"
                  />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage
