import React from 'react';
import '../css/Contect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <div className='divider'></div>
      <div className='contect-container'>
        <div className='title'>
          <label>Contact Us</label>
        </div>
        <div className='line'></div>
        <div className='content'>
          <div className='flex-container'>
            <ul className='icons'>
              <li><FontAwesomeIcon icon={faWhatsapp} /><a>1800 - 256 - ****</a></li>
              <li><FontAwesomeIcon icon={faClock} /><a>10AM to 10PM Mon - Sun</a></li>
              <li><FontAwesomeIcon icon={faPhone} /><a>1800 - 266 - ****</a></li>
              <li><FontAwesomeIcon icon={faMailBulk} /><a>visioinvaulthelp@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
