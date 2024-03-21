import React, { useState, useEffect } from 'react';
import '../css/ProductDetail.css';
import IMAGES from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import DeliveryDateChecker from '../component/DeliveryDateChecker';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function ProductDetail() {

  //for product fetching
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  ////


  
  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost/backend/product-detail.php?productId=${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('An error occurred while fetching product details.');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Check if product exists before adding to cart
    if (!product) {
      console.error('Product not found');
      return;
    }

   
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }



  //// product fetching end here 
  

  return (
    <>
      <div className='divider'></div>
    <div className='product'>
      <div id='productDisplaySection' className='product-image-section'>
        <div className='product-display-section'>
          <div className='product-display-main-img'>
            <img src={product.img} alt='Main Image' />
          </div>
          <div className='product-display-slider'>
            {[
              product.img,
              product.img,
              product.img,
              product.img,
              
            ].map((image, index) => (
              <div className='product-slider-card' key={index}>
                <img
                  src={image}
                  alt={`Slider Image ${index + 2}`}
                  
                />
              </div>
            ))}
          </div>
        </div>
        <div className='product-detail-button'>
          <Link to='/buynow'><button className='buy-now'>Buy Now</button></Link>
          <button className='add-to-cart'>Add to Cart</button>
        </div>
        
      </div>
      <div className='product-description-row'>
        <div className='product-discription'>
          <h3>FASTRACK</h3>
          <h2>{product.product_name}</h2>
          <h1>{product.product_brand}</h1>
          <span className='tax'>Inclusive of all taxes</span>
        </div>
        <div className='product-discription'>
          <DeliveryDateChecker />
        </div>

        <div className='product-discription'>
          <div className='frame-dimention-div'>
            {[
              { img: IMAGES.return_policy, text: '7 Days Return' },
              { img: IMAGES.exchange_policy, text: 'Exchange at 900+ Stores' },
              { img: IMAGES.tata_trust, text: 'Tata Trust' },
              { img: IMAGES.warranty, text: '6 Months warranty' }
            ].map((item, index) => (
              <div className='fd-img' key={index}>
                <img src={item.img} alt='' />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='product-discription'>
          <input type='checkbox' id='section1' className='accordion__input' />
          <label htmlFor='section1' className='accordion__label'> product Information </label>
          <div className="accordion__content">
            {[
              { label: 'SKU', value: 'FT1275UFP4MBUV' },
              { label: 'Availability', value: 'In Stock' },
              { label: 'Brand', value: product.product_brand },
              { label: 'Product Warranty', value: '6 months' },
              { label: 'Gender', value: product.gender },
              { label: 'Frame Material', value: product.frame_material },
              { label: 'Front Material', value: 'Plastic' },
              { label: 'Front Color', value: product.frame_color },
              { label: 'Temple Material', value: 'Plastic' },
              { label: 'Rim', value: product.rim },
              { label: 'Size', value: product.size },
              { label: 'Frame Shape', value: product.frame_shape	 }
            ].map((item, index) => (
              <div key={index}>
                <label>{item.label}</label> <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;