// AddressBook.js

import React, { useState } from 'react';
import { FaPlus, FaSave, FaTrashAlt, FaEllipsisH, FaEdit } from 'react-icons/fa';
import '../css/AddressBook.css';

const AddressBook = () => {
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    phoneNumber: '',
    pinCode: '',
    city: '',
    state: '',
    streetAddress: '',
    houseNo: '',
    landmark: '',
    useAsDefault: false,
  });

  const [addresses, setAddresses] = useState([
   
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const [fieldErrors, setFieldErrors] = useState({});

  const handleAddNewAddressClick = () => {
    setShowAddNewAddress(true);
  };

  const handleSaveNewAddress = () => {
    // Check if all required fields are filled
    const requiredFields = ['fullName', 'phoneNumber', 'pinCode', 'city', 'state', 'streetAddress', 'houseNo'];
    const fieldErrors = {};
  
    requiredFields.forEach((field) => {
      if (!newAddress[field]) {
        fieldErrors[field] = `Please fill in ${field}.`;
      }
    });
  
    // Display error messages for each field
    setFieldErrors(fieldErrors);
  
    // If any required field is missing, prevent saving
    if (Object.keys(fieldErrors).length > 0) {
      return;
    }
  
    // Save the new address if all required fields are filled
    setAddresses([
      ...addresses,
      {
        id: addresses.length + 1,
        name: `Address ${addresses.length + 1}`,
        phoneNumber: newAddress.phoneNumber,
        isDefault: newAddress.useAsDefault,
        details: { ...newAddress },
      },
    ]);
  
    setShowAddNewAddress(false);
    setNewAddress({
      fullName: '',
      phoneNumber: '',
      pinCode: '',
      city: '',
      state: '',
      streetAddress: '',
      houseNo: '',
      landmark: '',
      useAsDefault: false,
    });
  
    // Clear field errors
    setFieldErrors({});
  };
  
  const handleDiscardChanges = () => {
    setShowAddNewAddress(false);
    setNewAddress({
      fullName: '',
      phoneNumber: '',
      pinCode: '',
      city: '',
      state: '',
      streetAddress: '',
      houseNo: '',
      landmark: '',
      useAsDefault: false,
    });
  };

  const handleEditAddress = (id) => {
    const selected = addresses.find((address) => address.id === id);
    setSelectedAddress(selected);
    setShowAddNewAddress(true);
    setNewAddress({
      fullName: selected.details.fullName,
      phoneNumber: selected.phoneNumber,
      pinCode: selected.details.pinCode || '',
      city: selected.details.city || '',
      state: selected.details.state || '',
      streetAddress: selected.details.streetAddress || '',
      houseNo: selected.details.houseNo || '',
      landmark: selected.details.landmark || '',
      useAsDefault: selected.isDefault,
    });
  };

  const handleDeleteAddress = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this address?');

    if (confirmDelete) {
      const updatedAddresses = addresses.filter((address) => address.id !== id);
      setAddresses(updatedAddresses);
    }
  };

  

  return (
    <div className="address-book-container">
      <h2>
        Address Book{' '}
        {!showAddNewAddress && (
          <span className="address-count">
            ({addresses.length} {addresses.length === 1 ? 'address' : 'addresses'})
          </span>
        )}
      </h2>
      {!showAddNewAddress ? (
        <div className="address-list">
          {addresses.map((address) => (
            <div key={address.id} className="address-item">
              <div className="address-details">
                <div className="address-name">{address.name}</div>
                <div>{address.details.fullName}</div>
                <div>{address.details.phoneNumber}</div>
              </div>
              <div className="address-actions">
                <div className="edit-icon" onClick={() => handleEditAddress(address.id)}>
                  <FaEdit />
                </div>
                <div className="delete-icon" onClick={() => handleDeleteAddress(address.id)}>
                  <FaTrashAlt />
                </div>
                <div className="ellipsis-icon">
                  <FaEllipsisH />
                </div>
              </div>
            </div>
          ))}
          <div className="add-new-address" onClick={handleAddNewAddressClick}>
            <FaPlus /> Add New Address
          </div>
        </div>
      ) : (
        <div className="add-new-address-form">
          <h3>{selectedAddress ? 'Edit Address' : 'Add New Address'}</h3>
          <div className="form-fields">
  <label>
    Full Name: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.fullName}
    onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
    required
  />

  <label>
    Phone Number: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.phoneNumber}
    onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })}
    required
  />

  <label>
    Pin Code: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.pinCode}
    onChange={(e) => setNewAddress({ ...newAddress, pinCode: e.target.value })}
    required
  />

  <label>
    City: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.city}
    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
    required
  />

  <label>
    State: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.state}
    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
    required
  />

  <label>
    Street Address: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.streetAddress}
    onChange={(e) => setNewAddress({ ...newAddress, streetAddress: e.target.value })}
    required
  />

  <label>
    House No./Building Name: <span className="required">*</span>
  </label>
  <input
    type="text"
    value={newAddress.houseNo}
    onChange={(e) => setNewAddress({ ...newAddress, houseNo: e.target.value })}
    required
  />

  <label>Landmark:</label>
  <input
    type="text"
    value={newAddress.landmark}
    onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
    // Landmark is not marked as required
  />

  <label>
    Use this as default shopping address:
    <input
      type="checkbox"
      checked={newAddress.useAsDefault}
      onChange={(e) => setNewAddress({ ...newAddress, useAsDefault: e.target.checked })}
    />
  </label>
</div>

          <div className="form-actions">
            <button className="save-button" onClick={handleSaveNewAddress}>
              <FaSave /> Save
            </button>
            <button className="discard-button" onClick={handleDiscardChanges}>
              <FaTrashAlt /> Discard Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressBook;