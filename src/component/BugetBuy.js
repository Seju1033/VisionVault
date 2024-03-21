import React from 'react'
import '../css/BudgetBuy.css'
import BudgetBuyScript from './BudgetBuyScipt';
import IMAGES from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
function BugetBuy() {
    return (
        <>
            <h2>Budget Buy</h2>
            <div class='budget-buy'>    
                <div class="wrapper">
                    <i id="left" class="fa-solid fa-angle-left"><FontAwesomeIcon icon={faArrowLeft}/></i>
                    <ul class="carousel">
                        <li class="card">
                            <div class="img"><img src={IMAGES.bbBanner1} alt="img" draggable="false" /></div>
                            <span>Rounded Sunglasses <br/>Starting from 1399</span>
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.bbBanner2} alt="img" draggable="false" /></div>
                            
                            <span>Wayfarer Sunglasses<br/> Starting from 999</span>
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.bbBanner3} alt="img" draggable="false" /></div>
                           
                            <span>Sporty sunglasses<br/> Starting from 1099</span>
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.bbBanner4} alt="img" draggable="false" /></div>
                           
                            <span>Square Eyeglasses<br/> Starting from 699</span>
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.bbBanner5} alt="img" draggable="false" /></div>
                       
                            <span>Aviator Sunglasses <br/>Starting from 1399</span>
                        </li>
                       
                    </ul>
                    <i id="right" class="fa-solid fa-angle-right"><FontAwesomeIcon icon={faArrowRight}/></i>
                </div>


            </div>
            <BudgetBuyScript />
        </>
    )
}

export default BugetBuy