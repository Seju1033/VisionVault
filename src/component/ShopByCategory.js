import React from 'react'
import IMAGES from '../assets/images'
import '../css/ShopByCategory.css'
function ShopByCategory () {
  return (
    <>
    <div class='sbc-container'>
    <div class="sbc-wrapper">
                  <h2>Shop by Category</h2>
                  <div class="sbc-box">
                     <input checked="checked" id="box1" name="box" type="radio" />
                     <label className='men-section' for="box1">MENS</label>
                     <div class="sbc-content">
                        <ul>
                           <li><img className='img1' src={IMAGES.mens_sunglasses} /><a href=''>Sunglasses</a></li>
                           <li><img className='img2' src={IMAGES.mens_eyeglasses} /><a href=''>Eyeglasses</a></li>
                           <li><img className='img3' src={IMAGES.mens_readingglasses} /><a href=''>Readingglasses</a></li>
                           <li><img className='img4' src={IMAGES.mens_contectglasses} /><a href=''>Contectglasses</a></li>
                        </ul>
                     </div>
                     <input id="box2" name="box" type="radio" />
                     <label className='women-section' for="box2">WOMENS</label>
                     <div class="sbc-content">

                        <ul>
                           <li><img src={IMAGES.womens_sunglasses} href='#' /><a href=''>Sunglasses</a></li>
                           <li><img src={IMAGES.womens_eyeglasses} /><a href=''>Eyeglasses</a></li>
                           <li><img src={IMAGES.womens_readingglasses} /><a href=''>Readingglasses</a></li>
                           <li><img src={IMAGES.womens_contectglasses} /><a href=''>Contectlenses</a></li>
                        </ul>
                     </div>
                     <input id="box3" name="box" type="radio" />
                     <label className='kid-section' for="box3">KIDS</label>
                     <div class="sbc-content">

                        <ul>
                           <li><img src={IMAGES.kids_sunglasses} /><a href=''>Sunglasses</a></li>
                           <li><img src={IMAGES.kids_eyeglasses} /><a href=''>Eyeglasses</a></li>
                           <li><img src={IMAGES.kids_computerglasses} /><a href=''>Computerglasses</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
    </div>
         
    </>
  )
}

export default ShopByCategory