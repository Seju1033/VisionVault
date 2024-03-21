import React, { useState } from 'react';

const BuyNowComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    // Add your logic for handling the "Buy Now" action
    console.log(`Buying ${quantity} item(s)`);
    // Add logic for the actual purchase, e.g., redirect to a payment page or trigger an API call.
  };

  return (
    <div>
      <h2>Buy Now</h2>
      <p>Quantity: {quantity}</p>
      <button onClick={handleDecreaseQuantity}>-</button>
      <button onClick={handleIncreaseQuantity}>+</button>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default BuyNowComponent;
