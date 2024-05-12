import React from 'react'
import './Changelog.scss'



import HeaderInner from '../Header/HeaderInner';


const Changelog = () => {
  return (
    <>
    <HeaderInner 
        WrapperHeading="Changelog"
    />

    <section className='box_main'>
        <div className='container'>
            <div className='wrapper'>
                <div className='box_otr'>
                    <h2 className='heading heading-h2-2'>V.1</h2>
                </div>
                <p className='text heading-m'>Initial Attorney Webflow Template Release</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Changelog
