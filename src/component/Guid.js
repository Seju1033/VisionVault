import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from '../assets/images'
import Slider from "react-slick";
import '../css/Guid.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Guid() {
   
    return (
        <>
        <h2>Guids</h2>
            <div className='guid'>
            <div class="wrapper">
                    <i id="left" class="fa-solid fa-angle-left"><FontAwesomeIcon icon={faArrowLeft}/></i>
                    <ul class="carousel">
                    <li class="card">
                            <div class="img"><img src={IMAGES.guid1} alt="img" draggable="false" /></div>
                            
                            <span>Size Guid</span>
                        </li>

                        <li class="card">
                            <div class="img"><img src={IMAGES.guid2} alt="img" draggable="false" /></div>
                            <span>Face Shape Guid</span>
                        </li>
                       
                        <li class="card">
                            <div class="img"><img src={IMAGES.guid3} alt="img" draggable="false" /></div>
                           
                            <span>Precription Guid</span>
                        </li>
                        <li class="card">
                            <div class="img"><img src={IMAGES.guid4} alt="img" draggable="false" /></div>
                           
                            <span>10 Second Eye Scanning </span>
                        </li>
                        
                       
                    </ul>
                    <i id="right" class="fa-solid fa-angle-right"><FontAwesomeIcon icon={faArrowRight}/></i>
                </div>



            </div>
        </>
    )
}

const data = [
    {
        img: [IMAGES.titan_banner],
        title: 'titan'
    },
    {
        img: [IMAGES.titan_banner],
        title: 'titan'
    },
    {
        img: [IMAGES.titan_banner],
        title: 'titan'
    },
    {
        img: [IMAGES.titan_banner],
        title: 'titan'
    },
    {
        img: [IMAGES.titan_banner],
        title: 'titan'
    }
]

export default Guid