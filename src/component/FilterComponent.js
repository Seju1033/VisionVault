// FilterComponent.js

import React, { useState } from 'react';
import '../css/FilterComponent.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FilterComponent = () => {
  const initialFilters = {
    frameStyle: [],
    frameShape: [],
    frameColor: [],
    frameSize: [],
    brands: [],
    collections: [],
    gender: [],
    price: [],
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [dropdownStates, setDropdownStates] = useState({
    frameStyle: false,
    frameShape: false,
    frameColor: false,
    frameSize: false,
    brands: false,
    collections: false,
    gender: false,
    price: false,
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const handleResetFilters = () => {
    setSelectedFilters(initialFilters);
  };

  const toggleDropdown = (category) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [category]: !prevStates[category],
    }));
  };

  return(
    <div className="filter-container">
      <div className="filter-heading">
        <span>Filter</span>
        <button className="reset-button" onClick={handleResetFilters}>
          Reset
        </button>
        
      </div>
   
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('frameStyle')}>
          <span>Frame Style</span> 
          <span className={`arrow-icon ${dropdownStates.frameStyle ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        
        {dropdownStates.frameStyle && (
          <div className="filter-dropdown-content">
            {/* Content for Frame Style dropdown */}
            <label className="custom-label">
            <div>Rimmed</div>
             <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameStyle', 'Rimmed')}
                checked={selectedFilters.frameStyle.includes('Rimmed')}
              />
              </div>
             
            </label>
            <label className="custom-label">
           <div> Rimless</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameStyle', 'Rimless')}
                checked={selectedFilters.frameStyle.includes('Rimless')}
              /></div>
              
            </label>
            <label className="custom-label">
            <div>Rimm</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameStyle', 'Rim with Rimless')}
                checked={selectedFilters.frameStyle.includes('Rim with Rimless')}
              /></div>
              
            </label>
          </div>
        )}
      </div>
      
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('frameShape')}>
          <span>Frame Shape</span>
          <span className={`arrow-icon ${dropdownStates.frameShape ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.frameShape && (
          <div className="filter-dropdown-content">
            {/* Updated Content for Frame Shape dropdown */}
            <label className="custom-label">
           <div> Aviator</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Aviator')}
                checked={selectedFilters.frameShape.includes('Aviator')}
              />
              </div>
              
            </label>
            <label className="custom-label">
           <div> Square</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Square')}
                checked={selectedFilters.frameShape.includes('Square')}
              /></div>
              
            </label>
            <label className="custom-label">
            <div>Cat Eye</div>
             <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Cat Eye')}
                checked={selectedFilters.frameShape.includes('Cat Eye')}
              /></div>
             
            </label>
            <label className="custom-label">
            <div>Oval</div>
             <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Oval')}
                checked={selectedFilters.frameShape.includes('Oval')}
              /></div>
             
            </label>
            <label className="custom-label">
           <div> Round</div>
             <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Round')}
                checked={selectedFilters.frameShape.includes('Round')}
              />
              </div>
              
            </label>
            <label className="custom-label">
           <div> Rectangle</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Rectangle')}
                checked={selectedFilters.frameShape.includes('Rectangle')}
              />
              </div>
              
            </label>
            <label className="custom-label">
            <div>Wayfarer</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Wayfarer')}
                checked={selectedFilters.frameShape.includes('Wayfarer')}
              />
              </div>
              
            </label>
            <label className="custom-label">
            <div>Pilot</div>
             <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameShape', 'Pilot')}
                checked={selectedFilters.frameShape.includes('Pilot')}
              />
              </div>
              
            </label>
          </div>
        )}
      </div>
      
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('frameColor')}>
          <span>Frame Color</span>
          <span className={`arrow-icon ${dropdownStates.frameColor ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.frameColor && (
          <div className="filter-dropdown-content">
            {/* Content for Frame Color dropdown */}
            {[
              'Bronze', 'Brown', 'Black', 'Gold', 'Orange',
              'Purple', 'Rose', 'Gold', 'Silver', 'Transparent',
              'Violet', 'Yellow', 'Black', 'Blue', 'Green',
              'Red', 'Grey', 'Pink', 'Peach'
            ].map((color) => (
              <label key={color} className="custom-label">
                <div>{color}</div>
                <div><input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('frameColor', color)}
                  checked={selectedFilters.frameColor.includes(color)}
                /></div>
              </label>
            ))}
          </div>
        )}
      </div>
      
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('frameSize')}>
          <span>Frame Size</span>
          <span className={`arrow-icon ${dropdownStates.frameSize ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.frameSize && (
          <div className="filter-dropdown-content">
            {/* Content for Frame Size dropdown */}
            <label className="custom-label">
              <div>Extra Small</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameSize', 'Extra Small')}
                checked={selectedFilters.frameSize.includes('Extra Small')}
              /></div>
            </label>
            <label className="custom-label">
            <div>Large</div>
            <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameSize', 'Large')}
                checked={selectedFilters.frameSize.includes('Large')}
              /></div>
            </label>
            <label className="custom-label">
            <div>Medium</div>
            <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameSize', 'Medium')}
                checked={selectedFilters.frameSize.includes('Medium')}
              /></div>
            </label>
            <label className="custom-label">
            <div>Small</div>
            <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('frameSize', 'Small')}
                checked={selectedFilters.frameSize.includes('Small')}
              /></div>
            </label>
          </div>
        )}
      </div>
      
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('brands')}>
          <span>Brands</span>
          <span className={`arrow-icon ${dropdownStates.brands ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.brands && (
          <div className="filter-dropdown-content">
            {/* Content for Brands dropdown */}
            <label className="custom-label">
            <div> Zerf</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Zerf')}
                checked={selectedFilters.brands.includes('Zerf')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Fastrack</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Fastrack')}
                checked={selectedFilters.brands.includes('Fastrack')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Vouge Wear</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Vouge Wear')}
                checked={selectedFilters.brands.includes('Vouge Wear')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Ray Ban</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Ray Ban')}
                checked={selectedFilters.brands.includes('Ray Ban')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Ted-Baker</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Ted-Baker')}
                checked={selectedFilters.brands.includes('Ted-Baker')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Zeal Optics</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('brands', 'Zeal Optics')}
                checked={selectedFilters.brands.includes('Zeal Optics')}
              /></div>
            </label>
          </div>
        )}
      </div>
      
      <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('gender')}>
          <span>Gender</span>
          <span className={`arrow-icon ${dropdownStates.gender ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.gender && (
          <div className="filter-dropdown-content">
            {/* Content for Gender dropdown */}
            <label className="custom-label">
            <div> Men</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('gender', 'Men')}
                checked={selectedFilters.gender.includes('Men')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Women</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('gender', 'Women')}
                checked={selectedFilters.gender.includes('Women')}
              /></div>
            </label>
            <label className="custom-label">
            <div> Kids</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('gender', 'Kids')}
                checked={selectedFilters.gender.includes('Kids')}
              /></div>
            </label>
          </div>
        )}
      </div>
      
       <div className="filter-option">
        <div className="filter-title" onClick={() => toggleDropdown('price')}>
          <span>Price</span>
          <span className={`arrow-icon ${dropdownStates.price ? 'open' : 'closed'}`}><FontAwesomeIcon icon={faAngleDown} className='angle-down-arrow' /></span>
        </div>
        {dropdownStates.price && (
          <div className="filter-dropdown-content">
            {/* Content for Price dropdown */}
            <label className="custom-label">
            <div> Below 1500</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('price', 'Below 1500')}
                checked={selectedFilters.price.includes('Below 1500')}
              /></div>
            </label>
            <label className="custom-label">
            <div> 1501-3000</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('price', '1501-3000')}
                checked={selectedFilters.price.includes('1501-3000')}
              /></div>
            </label>
            <label className="custom-label">
            <div> 3001-4500</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('price', '3001-4500')}
                checked={selectedFilters.price.includes('3001-4500')}
              /></div>
            </label>
            <label className="custom-label">
            <div> 4501-6000</div>
            <div> <input
                type="checkbox"
                onChange={() => handleCheckboxChange('price', '4501-6000')}
                checked={selectedFilters.price.includes('4501-6000')}
              /></div>
            </label>
            <label className="custom-label">
              <div>Above 6000</div>
              <div><input
                type="checkbox"
                onChange={() => handleCheckboxChange('price', 'Above 6000')}
                checked={selectedFilters.price.includes('Above 6000')}
              />
              </div>
            </label>
          </div>
        )}
      </div>
      
      {/* ... (existing code) */}
    </div>
  );
};

export default FilterComponent;