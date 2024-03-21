import React, { useState } from 'react';
import '../css/DeliveryDateChecker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const DeliveryDateChecker = () => {
  const [pinCode, setPinCode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePinCodeChange = (e) => {
    const inputPin = e.target.value;
    // Allow only numeric characters and limit to 6 digits
    const sanitizedPin = inputPin.replace(/\D/g, '').slice(0, 6);
    setPinCode(sanitizedPin);
  };

  const handleCheckDeliveryDate = () => {
    if (pinCode.length !== 6) {
      setErrorMessage('Please enter a valid 6-digit pin code');
      setDeliveryDate(null);
      return;
    }

    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 7);

    setErrorMessage('');
    setDeliveryDate(deliveryDate.toDateString());
  };

  return (
    <div className='deliver-date-cheake'>
      <h2>Check Delivery Date</h2>
      <div className='input-btn'>
        <label>
          <input type="text" value={pinCode}   onChange={handlePinCodeChange} />
        </label>
        <button onClick={handleCheckDeliveryDate}>{deliveryDate ? 'Check  ' : 'Check'}</button>
      </div>
    
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {deliveryDate && (
        <>
          <p>
            <FontAwesomeIcon icon={faShippingFast} /> Get it by {new Date(deliveryDate).toDateString()}
            <br />
            (*Delivery Date could be revised based on lens selection)
          </p>
          <p>
            <FontAwesomeIcon icon={faBox} /> Easy 7 Day Returns Applicable
          </p>
        </>
      )}
    </div>
  );
};

export default DeliveryDateChecker;
