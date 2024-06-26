import React, { Fragment } from 'react'

import HeaderInner from '../../components/Header/HeaderInner';
import OfferBanner from './OfferBanner';
import PricingPlan from './PricingPlan';
import FAQSection from '../../components/FAQSection/FAQSection';

import './PricingPage.scss';

import Icon from '../../img/icon2.svg';


const PricingPage = () => {
    return (
        <Fragment>
            <HeaderInner 
                WrapperHeading="Pricing"
            />
            <OfferBanner />
            <section className='Pricing_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading heading-h2'>Plan For Justice</h2>
                        <img className='icon' src={Icon} alt='Icon' />
                    </div>
                    <div className='row row_custom'>
                        <PricingPlan 
                            PlanClass="col-lg-4 col-md-6 col-sm-6"
                            PlanHeading="Single Plan"
                            PlanText="For single person"
                            PlanPrice="$8.00"
                            PlanType1="Serious car crash"
                            PlanType2="Truck accidents"
                            PlanType3="Semi-truck collision"
                            PlanType4="-"
                            PlanType5="-"
                        />
                        <PricingPlan 
                            PlanClass="col-lg-4 col-md-6 col-sm-6"
                            PlanHeading="Group Plan"
                            PlanText="For group of peoples"
                            PlanPrice="$16.00"
                            PlanType1="Serious car crash"
                            PlanType2="Truck accidents"
                            PlanType3="Semi-truck collision"
                            PlanType4="Motorcycle accidents"
                            PlanType5="-"
                        />
                        <PricingPlan 
                            PlanClass="col-lg-4 col-md-6 col-sm-6"
                            PlanHeading="Business Plan"
                            PlanText="For business industry"
                            PlanPrice="$26.00"
                            PlanType1="Serious car crash"
                            PlanType2="Truck accidents"
                            PlanType3="Semi-truck collision"
                            PlanType4="Motorcycle accidents"
                            PlanType5="Wrongfull Death"
                        />
                    </div>
                </div>
            </section>
            <FAQSection />
        </Fragment>
    )
}

export default PricingPage
