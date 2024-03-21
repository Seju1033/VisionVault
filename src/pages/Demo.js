import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/') // Adjust the URL to match your server configuration
            .then(response => response.json())
            .then(data => setFrames(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
        <div className='ProductList'>
            
            <div className='product-list'>
                {
                    frames.map(frame => (
                        <div key={frame.product_id} className="card">
                            <img src={frame.img} alt={frame.product_name} style={{ maxWidth: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{frame.product_name}</h5>
                                <p className="card-text">{frame.product_brand}</p>
                               
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        </>
    )

   
   
};

export default ProductList;
