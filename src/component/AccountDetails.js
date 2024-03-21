// AccountDetails.js

import React, { useState, useEffect } from 'react';
import '../css/AccountDetails.css';

const AccountDetails = () => {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || 'John');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || 'Doe');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '123-456-7890');
  const [email, setEmail] = useState(localStorage.getItem('email') || 'john.doe@example.com');

  useEffect(() => {
    // Load user details from localStorage when component mounts
    setFirstName(localStorage.getItem('firstName') || 'John');
    setLastName(localStorage.getItem('lastName') || 'Doe');
    setPhoneNumber(localStorage.getItem('phoneNumber') || '123-456-7890');
    setEmail(localStorage.getItem('email') || 'john.doe@example.com');
  }, []);

  const handleUpgradeClick = () => {
    setIsUpgrading(true);
  };

  const handleSaveClick = () => {
    // Save/update user details to localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);

    // Toggle the upgrade state
    setIsUpgrading(false);
  };

  return (
    <div className="account-details-container">
      <h2>Account Details</h2>
      <div className="input-group">
        <label>First Name:</label>
        <input type="text" value={firstName} readOnly={!isUpgrading} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Last Name:</label>
        <input type="text" value={lastName} readOnly={!isUpgrading} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} readOnly={!isUpgrading} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Email Address:</label>
        <input type="email" value={email} readOnly={!isUpgrading} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {isUpgrading ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleUpgradeClick}>Upgrade Profile</button>
      )}
    </div>
  );
};

export default AccountDetails;
