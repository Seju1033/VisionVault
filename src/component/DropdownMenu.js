import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/DropdownMenu.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Best Seller');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // You can perform additional actions when an option is selected if needed
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption}
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div onClick={() => handleOptionClick('Best Seller')}>Best Seller</div>
          <div onClick={() => handleOptionClick('Price High to Low')}>Price High to Low</div>
          <div onClick={() => handleOptionClick('Price Low to High')}>Price Low to High</div>
          <div onClick={() => handleOptionClick('New')}>New</div>
          <div onClick={() => handleOptionClick('Sale')}>Sale</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
