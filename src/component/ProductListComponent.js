import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductListComponent.css'

function ProductListComponent({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.product_id} className="product">
            <Link to={`/product/${product.product_id}`}>
              <img src={product.img} alt={product.product_name} />
              <h3>{product.product_name}</h3>
            </Link>
            <p>Brand: {product.product_brand}</p>
            <p>Price: ${product.price}</p>
          
          </div>
        ))}
      </div>
 
    </div>
  );
}

export default ProductListComponent;
