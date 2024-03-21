import React from 'react'
import IMAGES from '../assets/images'
import '../css/RayBan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
function RayBan() {
  return (
    <>
      <div className='RayBan'>
        <div className='rayban-logo'>
          <img src={IMAGES.rb_logo} alt='' />
        </div>
        <div className='rayban-top-banner'>
          <img src={IMAGES.rb_banner_top} alt='' />
        </div>
        <div className='rayban-qoute'>
          <img src={IMAGES.rb_quote_1} alt='' />
        </div>
        <div className='rb-title'>
          <img src={IMAGES.rb_title} alt='' />
        </div>

        <div className='rayban-sun-eye-glasses'>
          <img src={IMAGES.rb_sunglasses_men} alt='' />
          <img src={IMAGES.rb_sunglasses_women} alt='' />
          <img src={IMAGES.rb_eyeglasses_men} alt='' />
          <img src={IMAGES.rb_eyeglasses_women} alt='' />
        </div>
        <div className='rb-piller'>
          <img src={IMAGES.rb_piller} alt='' />
          <img src={IMAGES.rb_quote} alt='' />
        </div>
        <div className='rayban-categorys'>
          <img src={IMAGES.rb_collection1} alt='' />
          <img src={IMAGES.rb_collection2} alt='' />
          <img src={IMAGES.rb_collection3} alt='' />
          <img src={IMAGES.rb_collection4} alt='' />
        </div>
        <div className='rayban-title'>
          <img src={IMAGES.rb_title_2} alt='' />
        </div>
        <div className='rayban-banners'>
          <img src={IMAGES.rb_banner1} alt='' />
          <img src={IMAGES.rb_banner2} alt='' />
          <img src={IMAGES.rb_banner3} alt='' />
        </div>


        <div className='rayban-container-2'>

          <div className='rayban-title-2'>
            <img src={IMAGES.rb_title_3} alt='' />
          </div>
          <div className='rayban-content-2'>

            <div className='rayban-sunglasses-card'>
              <div className='rayban-sunglasses-card-img'>
                <img src={IMAGES.black_aviator_unisex} alt='' />
              </div>
              <div className='rayban-sunglasses-card-title'>
                <label>Black Aviator Unisex Sunglasses <span>(srb3025i002585846)</span><br /><FontAwesomeIcon icon={faIndianRupee} />9360</label>
              </div>
            </div>

            <div className='rayban-sunglasses-card'>
              <div className='rayban-sunglasses-card-img'>
                <img src={IMAGES.gold_aviator} alt='' />
              </div>
              <div className='rayban-sunglasses-card-title'>
                <label>Gold Aviator Men Sunglasses <span>(rb3026iw202762)</span><br /><FontAwesomeIcon icon={faIndianRupee} />6790</label>
              </div>
            </div>

            <div className='rayban-sunglasses-card'>
              <div className='rayban-sunglasses-card-img'>
                <img src={IMAGES.black_aviator} alt='' />
              </div>
              <div className='rayban-sunglasses-card-title'>
                <label>Black Aviator Mens Sunglasses <span>(rb3432i00259)</span><br /><FontAwesomeIcon icon={faIndianRupee} />5390</label>
              </div>
            </div>


          </div>
        </div>

        <div className='rayban-bottom-banner'>
          <img src={IMAGES.rb_banner_bottom} alt='' />
        </div>
      </div>
    </>
  )
}

export default RayBan