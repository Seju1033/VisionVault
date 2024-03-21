import React from 'react'
import IMAGES from '../assets/images'
import '../css/GallaryComponent.css'
function GallaryComponent() {
  return (
   <>
        <div className='gallary-component-container'>
            <div className='gallary-component-heading'>
            <h3 className='gallary-component-title'>Perfect fit</h3>
            </div>
            
            <div className='gallary-component-box'>
                <div className='dream'>
                    <img src={IMAGES.gallaryimg1} alt='' />
                    <img src={IMAGES.gallaryimg2} alt='' />
                </div>
                <div className='dream'>
                    <img src={IMAGES.gallaryimg3} alt='' />
                    <img src={IMAGES.gallaryimg4} alt='' />
                    <img src={IMAGES.gallaryimg5} alt='' />
                </div>
            </div>
        </div>
   </>
  )
}

export default GallaryComponent