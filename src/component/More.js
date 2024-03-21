import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/More.css'

function More() {
    return (
        <>
            <div className='more-container'>
                <div className='more-content'>
                    <h1>1 Cr+</h1>
                    <span>Eyewear Sold</span>
                </div>
                
                <div className='more-content'>
                    <h1>900+</h1>
                    <span>Stores</span>
                </div>
                
                <div className='more-content'>
                    <div className='more-rating'><h1>4.9/5</h1><h3><FontAwesomeIcon icon={faStar} /></h3></div>
                    <span> On Google</span>
                </div>

            </div>
        </>
    )
}

export default More