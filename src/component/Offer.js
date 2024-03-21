import React, { useEffect, useState } from 'react';
import IMAGES from '../assets/images';
import '../css/Offer.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Offer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (direction) => {
    const carousel = document.querySelector('.carousel');
    const firstCardWidth = document.querySelector('.card').offsetWidth;

    setCurrentIndex((prevIndex) => {
      const newIndex =
        direction === 'left'
          ? prevIndex === 0
            ? data.length - 1
            : prevIndex - 1
          : prevIndex === data.length - 1
          ? 0
          : prevIndex + 1;

      // Scroll to the newly selected index
      carousel.scrollLeft = newIndex * firstCardWidth;
      return newIndex;
    });
  };

  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const firstCardWidth = document.querySelector('.card').offsetWidth;

    const handleScroll = () => {
      const newIndex = Math.round(carousel.scrollLeft / firstCardWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this useEffect runs only once after the initial render

  return (
    <>
      <div className='offer-title'>
        <h2> Offers </h2>
      </div>
      <div className='offer'>
        <div className='wrapper'>
          <i
            id='left'
            className='fa-solid fa-angle-left'
            onClick={() => handleButtonClick('left')}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </i>
          <ul className='carousel'>
            {data.map((item, index) => (
              <li className='card' key={index}>
                <div className='img'>
                  <img src={item.img[0]} alt='img' draggable='false' />
                </div>
              </li>
            ))}
          </ul>
          <i
            id='right'
            className='fa-solid fa-angle-right'
            onClick={() => handleButtonClick('right')}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    img: [IMAGES.offer1],
    title: 'Aviator Sunglasses Starting from 1399',
  },
  {
    img: [IMAGES.offer2],
    title: 'Round Sunglasses Starting from 1399',
  },
  {
    img: [IMAGES.offer3],
    title: 'Wayfarer Sunglasses Starting from 999',
  },
  {
    img: [IMAGES.offer4],
    title: 'Square Eyeglasses Starting from 699',
  },
  {
    img: [IMAGES.offer5],
    title: 'Sporty Sunglasses Starting from 1099',
  },
];

export default Offer;
