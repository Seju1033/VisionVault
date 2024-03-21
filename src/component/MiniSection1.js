// MiniSection1.js

import React from 'react';
import IMAGES from '../assets/images';
import '../css/MiniSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MiniSection1() {
    return (
        <div className="image-container">
          <img src={IMAGES.mini_section_banner} alt="Your Image" className="image" />
          <div className="label-container">
            <label className="label-text">Find a Store Nearby</label>
            <p>Locate a store near you </p>
          </div> 
          <div className="arrow-container">
            <span className="arrow"><FontAwesomeIcon icon={faArrowRight} className='mini-section-icon'/></span>
          </div>
        </div>
      );
}

export default MiniSection1;
