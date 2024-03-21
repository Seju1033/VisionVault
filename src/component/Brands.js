import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from '../assets/images'
import Slider from "react-slick";
import '../css/Brands.css'
function Brands() {
   
    return (
        <>
            <div className='brands'>
                {
                    data.map((d) => {
                        return (
                            <div className='brand-cards'>
                                <div className='cards'>
                                    <div className='image'> <img src={d.img} alt='' /></div>
                                    <div className='title'><label>{d.title}</label></div>
                                </div>
                            </div>
                        )
                    })
                }
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

export default Brands