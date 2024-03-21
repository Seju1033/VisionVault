import React, { useEffect, useState } from 'react'

function Demo() {
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/') // Adjust the URL to match your server configuration
            .then(response => response.json())
            .then(data => setFrames(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
  return (
   <>
    <div className='productlistcomponent'>
                    {
                        frames.map((frame)=>{
                            <>
                                <div className='productlistcard'>
                                    <div className='product_img'>
                                    <img src={frame.img} alt='#' />
                                    </div>
                                    <div className='productdetail'>
                                        <p>{frame.product_name}</p>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
   </>
  )
}

export default Demo