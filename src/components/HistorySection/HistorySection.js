import React from 'react'

import Experience from './Experience';

import './HistorySection.scss';

import Icon from '../../img/icon.svg';
import Image from '../../img/history-img.png';
import Image2 from '../../img/success-img.png';

const HistorySection = () => {
    return (
        <section className='HistorySection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-4 col_history_otr'>
                        <div className='col_history_inr'>
                            <div className='wrapper'>
                                <h2 className='heading heading-h2'>We Are Top Lawyers And History</h2>
                                <img className='icon' src={Icon} alt='Icon' />
                            </div>
                            <div className='content_main'>
                                <div className='content_otr'>
                                    <p className='heading heading-mb'>1995 - Opening</p>
                                    <p className='desc heading-m'>
                                        There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.
                                    </p>
                                </div>
                                <div className='content_otr'>
                                    <p className='heading heading-mb'>2011 – Open Branch Office</p>
                                    <p className='desc heading-m'>
                                        There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.
                                    </p>
                                </div>
                                <div className='content_otr'>
                                    <p className='heading heading-mb'>2015 – 18000K Client’s</p>
                                    <p className='desc heading-m'>
                                        There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.
                                    </p>
                                </div>
                                <div className='content_otr'>
                                    <p className='heading heading-mb'>2020– Best Law & Firm Awwards</p>
                                    <p className='desc heading-m'>
                                        There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={Image} alt='img' />
                            <img className='img2' src={Image2} alt='img' />
                        </div>
                    </div>
                    <Experience 
                        Experiene_class="col-lg-5"
                        Experience_icon={Icon}
                    />
                </div>
            </div>
        </section>
    )
}

export default HistorySection



