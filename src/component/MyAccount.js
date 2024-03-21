// MyAccount.js

import React, { useState, useEffect } from 'react';
import { FaAddressBook, FaShoppingCart, FaHistory, FaHeart, FaUniversity, FaNewspaper, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../css/MyAccount.css';
import AddressBook from '../component/AddressBook';
import MyOrders from '../component/MyOrders';
import PreviousOrders from '../component/PreviousOrders';
import Wishlist from '../component/Wishlist';
import BankDetail from '../component/BankDetail';
import NewsletterSubscription from '../component/NewslatterSubcription';
import AccountDetails from './AccountDetails';

const MyAccount = () => {
  const [selectedSection, setSelectedSection] = useState('accountDetails');
  const navigate = useNavigate();
  const { section } = useParams();

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    // Check the pathname to set the default selected section
    const pathname = window.location.pathname;
    if (pathname.includes('myOrders')) {
      setSelectedSection('myOrders');
    } else {
      setSelectedSection('accountDetails');
    }
  }, [section]);

  return (
    <div className="my-account-container">
      <div className="vertical-menu">
      <Link to='/myAccount/accountDetails'>
        <div className={`menu-item ${selectedSection === 'accountDetails' ? 'active' : ''}`} onClick={() => handleSectionClick('accountDetails')}>
          <FaUserCircle /> Account Details
        </div>
        </Link>
        <Link to='/myAccount/addressBook'>
        <div className={`menu-item ${selectedSection === 'addressBook' ? 'active' : ''}`} onClick={() => handleSectionClick('addressBook')}>
          <FaAddressBook /> Address Book
        </div>
        </Link>
        <Link to='/myAccount/myOrders'>
        <div className={`menu-item ${selectedSection === 'myOrders' ? 'active' : ''}`} onClick={() => handleSectionClick('myOrders')}>
          <FaShoppingCart /> My Orders
        </div>
        </Link>
        <Link to='/myAccount/PreviousOrders'>
        <div className={`menu-item ${selectedSection === 'previousOrders' ? 'active' : ''}`} onClick={() => handleSectionClick('previousOrders')}>
          <FaHistory /> Previous Orders
        </div>
        </Link>
        <Link to='/myAccount/Whislist'>
          <div className={`menu-item ${selectedSection === 'wishlist' ? 'active' : ''}`} onClick={() => handleSectionClick('wishlist')}>
          <FaHeart />Wishlist 
        </div>
        </Link>
        <Link to='/myAccount/BankDetails'><div className={`menu-item ${selectedSection === 'bankDetail' ? 'active' : ''}`} onClick={() => handleSectionClick('bankDetail')}>
          <FaUniversity />Bank Detail
        </div></Link>
        <Link to='/myAccount/NewsletterSubscription'>
        <div className={`menu-item ${selectedSection === 'newsletterSubscription' ? 'active' : ''}`} onClick={() => handleSectionClick('newsletterSubscription')}>
          <FaNewspaper /> Newsletter Subscription
        </div>
        </Link>
        <Link to='/'>
        <div className="menu-item" onClick={() => handleSectionClick('logout')}>
          <FaSignOutAlt /> Logout
        </div>
        </Link>
      </div>
      <div className="content-container" style={{ width: selectedSection ? '70%' : '100%' }}>
        {selectedSection === 'accountDetails' && <AccountDetails />}
        {selectedSection === 'addressBook' && <AddressBook />}
        {selectedSection === 'myOrders' && <MyOrders />}
        {selectedSection === 'previousOrders' && <PreviousOrders />}
        {selectedSection === 'wishlist' && <Wishlist />}
        {selectedSection === 'bankDetail' && <BankDetail />}
        {selectedSection === 'newsletterSubscription' && <NewsletterSubscription />}
        {/* Add other sections as needed */}
      </div>
    </div>
  );
};

export default MyAccount;
