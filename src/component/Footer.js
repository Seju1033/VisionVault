import React from 'react'
import '../css/Footer.css'
import { Link, useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();

  const handleMyOrdersClick = () => {
    navigate('/myaccount/myOrders');
  };
  return (
    <>
<footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name"> Vision Vault </span>
        </div>
       
      </div>
      <div class="link-boxes">
      <ul class="box">
          <li class="link_name">eye glasses</li>
          <li><a href='#'>Men</a></li>
          <li><a href='#'>Women</a></li>
          <li><a href='#'>Kids</a></li>
          <li><a href='#'>Fastrack</a></li>
          <li><a href='#'>Rimless</a></li>
        </ul>

        <ul class="box">
          <li class="link_name">sun glasses</li>
          <li><a href='#'>Men</a></li>
          <li><a href='#'>Women</a></li>
          <li><a href='#'>Fastrack</a></li>
          <li><a href='#'>Rimless</a></li>
        </ul>
        
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="/myAccount/accountDetails">Profile</a></li>
          <li><Link to='/login'><a href="#">My account</a></Link></li>
          <li onClick={handleMyOrdersClick}><a href="#">Purchase</a></li>
          <li><Link to='/ourPolicy'><a href='#'>Our Policies</a></Link></li>
          <li><a href='/login-signup'>Create an Account</a></li>
        
        </ul>
        <ul class="box">
          <li class="link_name">about vision Vault</li>
          <li><Link to='/aboutus'><a href='#'>About Us</a></Link></li>    
          <li><a href='#'>Blog</a></li>
          <li><Link to='/contect'><a href='#'>Contect Us</a></Link></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">VisionVault.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="/ourPolicy">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
   </> 
  )
}

export default Footer