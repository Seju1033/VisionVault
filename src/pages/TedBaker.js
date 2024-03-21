import React from 'react'
import IMAGES from '../assets/images'
import '../css/TedBaker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
function TedBaker() {
  return (
    <>
      <div className='TedBaker'>
        <div className='ted-top-banner'>
          <img src={IMAGES.tb_banner_top} alt='' />
        </div>
        <div className='ted-content'>

          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB1} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB232100249<br/><FontAwesomeIcon icon={faIndianRupee}/>8,999</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB2} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB828216955<br/><FontAwesomeIcon icon={faIndianRupee}/>8,999</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB3} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB824553248<br/><FontAwesomeIcon icon={faIndianRupee}/>8,999</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB4} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB232222851<br/><FontAwesomeIcon icon={faIndianRupee}/>10,499</label>
              </div>                
          </div>
        </div>
        <div className='ted-qoute'>
        <img src={IMAGES.tb_qoute} alt='' />
        </div>
        <div className='ted-men'>
          <div className='ted-men-img'>
          <img src={IMAGES.tb_eyeglasses_men} alt='' />
          </div>
          <div className='ted-men-content'>

          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB5} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB827913250<br/><FontAwesomeIcon icon={faIndianRupee}/>11,499</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB6} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB824696852<br/><FontAwesomeIcon icon={faIndianRupee}/>8,999</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB7} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB826900150<br/><FontAwesomeIcon icon={faIndianRupee}/>9,999</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB8} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB434200252<br/><FontAwesomeIcon icon={faIndianRupee}/>8,999</label>
              </div>                
          </div>

          </div>
        </div>
        <div className='ted-women'>
          <div className='ted-women-content'>

          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB9} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB923812254<br/><FontAwesomeIcon icon={faIndianRupee}/>11,499</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB10} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB922959152<br/><FontAwesomeIcon icon={faIndianRupee}/>9,499</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB11} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB920626652<br/><FontAwesomeIcon icon={faIndianRupee}/>10,499</label>
              </div>
          </div>
          <div className='ted-card'>
              <div className='ted-card-img'>
                <img src={IMAGES.FTB12} alt='' />
              </div>
              <div className='ted-card-title'>
                  <label>FTB232250951<br/><FontAwesomeIcon icon={faIndianRupee}/>10,499</label>
              </div>                
          </div>

          </div>
          <div className='ted-women-img'>
          <img src={IMAGES.tb_eyeglasses_women} alt='' />
          </div>
        </div>
        <div className='ted-bottom-banner'>
        <img src={IMAGES.tb_banner_bottom} alt='' />
        </div>
      </div>
    </>
  )
}

export default TedBaker