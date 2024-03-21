import React from 'react'
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleXmark, faCircleUser, } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faBars, faCartShopping, faChevronDown, faLocation, faLocationDot, faMapLocation, faMapMarked, faPersonRifle, faShippingFast, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import IMAGES from '../assets/images'
function Header() {
  return (
    <>
      <nav>
        <div class="wrapper">
          <label for="menu-btn" class="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>

          <div class="logo"><Link to='/'><a href="#">VISIONVAULT</a></Link> </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><FontAwesomeIcon icon={faCircleXmark} /></label>
            <li>
              <a href="#" class="desktop-item">eyeglasses<FontAwesomeIcon className='nav-links-icon' icon={faChevronDown} /></a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">Eyeglasses</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <header>Gender</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Male</a></Link></li>
                      <li><Link to='/products'><a href="#">Female</a></Link></li>
                      <li><Link to='/products'><a href="#">Kids</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Collection</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Signature</a></Link></li>
                      <li><Link to='/products'><a href="#">Retro</a></Link></li>
                      <li><Link to='/products'><a href="#">Crystal Burst</a></Link></li>
                      <li><Link to='/products'><a href="#">Ace-Basics</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shapes</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rectangle</a></Link></li>
                      <li><Link to='/products'><a href="#">Round</a></Link></li>
                      <li><Link to='/products'><a href="#">Cat eye</a></Link></li>
                      <li><Link to='/products'><a href="#">pilot</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>STYLE</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rimmed</a></Link></li>
                      <li><Link to='/products'><a href="#">semi Rimmed</a></Link></li>
                      <li><Link to='/products'><a href="#">Rimless</a></Link></li>
                      
                    </ul>
                  </div>
                  <div class="row">
                    <header>top Brands</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">zefr</a></Link></li>
                      <li><Link to='/products'><a href="#">titan</a></Link></li>
                      <li><Link to='/products'><a href="#">Fastrack</a></Link></li>
                      <li><Link to='/products'><a href="#">Dash for Kids</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>FETURED BRANDS</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rayban</a></Link></li>
                      <li><Link to='/products'><a href="#">CarreraS</a></Link></li>
                      <li><Link to='/products'><a href="#">Silhouette</a></Link></li>
                      <li><Link to='/products'><a href="#">Bolon</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="desktop-item">Sunglasses<FontAwesomeIcon className='nav-links-icon' icon={faChevronDown} /></a>
              <input type="checkbox" id="showMega2" />
              <label for="showMega2" class="mobile-item">sunglasses</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <header>Gender</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Male</a></Link></li>
                      <li><Link to='/products'><a href="#">Female</a></Link></li>
                      <li><Link to='/products'><a href="#">Kids</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Collection</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Signature</a></Link></li>
                      <li><Link to='/products'><a href="#">Retro</a></Link></li>
                      <li><Link to='/products'><a href="#">Crystal Burst</a></Link></li>
                      <li><Link to='/products'><a href="#">Ace-Basics</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Shapes</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rectangle</a></Link></li>
                      <li><Link to='/products'><a href="#">Round</a></Link></li>
                      <li><Link to='/products'><a href="#">Cat eye</a></Link></li>
                      <li><Link to='/products'><a href="#">pilot</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>STYLE</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rimmed</a></Link></li>
                      <li><Link to='/products'><a href="#">semi Rimmed</a></Link></li>
                      <li><Link to='/products'><a href="#">Rimless</a></Link></li>
                      
                    </ul>
                  </div>
                  <div class="row">
                    <header>top Brands</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">zefr</a></Link></li>
                      <li><Link to='/products'><a href="#">titan</a></Link></li>
                      <li><Link to='/products'><a href="#">Fastrack</a></Link></li>
                      <li><Link to='/products'><a href="#">Dash for Kids</a></Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>FETURED BRANDS</header>
                    <ul class="mega-links">
                      <li><Link to='/products'><a href="#">Rayban</a></Link></li>
                      <li><Link to='/products'><a href="#">CarreraS</a></Link></li>
                      <li><Link to='/products'><a href="#">Silhouette</a></Link></li>
                      <li><Link to='/products'><a href="#">Bolon</a></Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>
            <li><a href="#">Computer Glasses</a></li>
            <li><a href="#">Reading glasses</a></li>
            <li>
              <a href="#" class="desktop-item">Brands<FontAwesomeIcon className='nav-links-icon' icon={faChevronDown} /></a>
              <input type="checkbox" id="showDrop2" />
              <ul class="drop-menu">
                <li><Link to='/zerf' ><a href="#">Zerf</a></Link></li>
                <li><Link to='/vouge' ><a href="#">Vouge</a></Link></li>
                <li><Link to='/fastrack' ><a href="#">Fastrack</a></Link></li>
                <li><Link to='/rayban' ><a href="#">Rayban</a></Link></li>
                <li><Link to='/ted-baker' ><a href="#">ted-baker</a></Link></li>
                <li><Link to='/zeal-optics' ><a href="#">zeal optics</a></Link></li>
              </ul>
            </li>

          </ul>

          <div className='cart-section'>
            <Link to='/cart'><a href='#'><FontAwesomeIcon className='cart-icon' icon={faCartShopping} /></a></Link>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Header