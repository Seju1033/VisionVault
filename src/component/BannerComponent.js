import React from 'react'

import IMAGES from '../assets/images'
import '../css/BannerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BannerComponentScript from './BannerComponentScript';
function BannerComponent() {

    return (
        <>

            <div class='banner-component'>


            <div class="wrapper">
                    <i id="left" class="fa-solid fa-angle-left"><FontAwesomeIcon icon={faAngleLeft}/></i>
                    <ul class="carousel">
                        <li class="card">
                            <div class="img"><img src={IMAGES.banner1} alt="img" draggable="false" /></div>      
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.banner2} alt="img" draggable="false" /></div>    
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.banner3} alt="img" draggable="false" /></div>   
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.banner4} alt="img" draggable="false" /></div>  
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.banner5} alt="img" draggable="false" /></div>
                        </li>
                       
                    </ul>
                    <i id="right" class="fa-solid fa-angle-right"><FontAwesomeIcon icon={faAngleRight}/></i>
                </div>


            </div>
            <BannerComponentScript />
        </>
    )
}

const data = [

    {
        img: [IMAGES.banner1],
    }
    ,
    {
        img: [IMAGES.banner2],
    }
    ,
    {
        img: [IMAGES.banner3],
    }
    ,
    {
        img: [IMAGES.banner4],
    }
    ,
    {
        img: [IMAGES.banner5],
    }
    ,
]

export default BannerComponent