import React from 'react'

import Icon from '../../img/icon.svg';
import PracticeAreasBox from './PracticeAreasBox';
import { Briefcase, Truck, UsersThree } from '@phosphor-icons/react';

const PracticeAreas = () => {
  return (
    <section className='PracticeAreas'>
        <div className='container'>
            <div className='wrapper'>
                <div className='heading_otr'>
                    <h2 className='heading heading-h2'>Explore <br />Our Practice Arease</h2>
                    <img className='icon' src={Icon} alt='Icon' />
                </div>
                <div className='desc_otr'>
                    <p className='desc heading-m'>
                        There are <span className='desc_inr heading-mb'>many variations of passages</span> of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir <span className='desc_inr heading-mb'>randomised workds</span> which don't look even slightly believable.  
                    </p>
                </div>
            </div>
            <div className='row row_custom'>
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Business Law"
                    BoxIcon= {<Briefcase size={36} />}
                />
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Construction Law"
                    BoxIcon= {<Briefcase size={36} />}
                />
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Car Accident"
                    BoxIcon= {<Truck size={36} />}
                />
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Wrongful Death"
                    BoxIcon= {<Briefcase size={36} />}
                />
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Criminal Law"
                    BoxIcon= {<Briefcase size={36} />}
                />
                <PracticeAreasBox
                    PracticeAreasBox="col-lg-4 col-mg-6 col-sm-6"
                    BoxHeading="Family Law"
                    BoxIcon= {<UsersThree size={36} />}
                />
            </div>
        </div>
    </section>
  )
}

export default PracticeAreas
