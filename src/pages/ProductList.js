import IMAGES from '../assets/images';
import '../css/ProductList.css'
import FilterComponent from '../component/FilterComponent';
import DropdownMenu from '../component/DropdownMenu';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Productlistcomponent from '../component/ProductListComponent';

function ProductList() {
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/') // Adjust the URL to match your server configuration
            .then(response => response.json())
            .then(data => setFrames(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className='divider'></div>
            <div className='affordabel-glasses'>
                <h1>Eyeglasses at Affordabel Prises</h1>
                <div className='affordabel-glasses-cards'>
                    <div className='affordabel-glasses-card'>

                        <div class="img" >
                            <img src={IMAGES.eyeglassesDesktop1} alt="img" draggable="false" />
                        </div>
                        <h3>affordeble</h3>
                        <h2>750-1500</h2>
                    </div>

                    <div className='affordabel-glasses-card'>
                        <div class="img">
                            <img src={IMAGES.eyeglassesDesktop2} alt="img" draggable="false" />
                        </div>
                        <h3>mid-premium</h3>
                        <h2>1500-3000</h2>
                    </div>
                    <div className='affordabel-glasses-card'>
                        <div class="img">
                            <img src={IMAGES.eyeglassesDesktop3} alt="img" draggable="false" />
                        </div>

                        <h3>premium</h3>
                        <h2>above 3000</h2>
                    </div>

                </div>
            </div>
            <div className='mini-filter'>
                <DropdownMenu />
            </div>
            <div className='product-list'>
                <div className='custom-filter-container'>
                    <FilterComponent />
                </div>
                <div className='productlistcomponent'>
                   <Productlistcomponent/>
                </div>
            </div>
            </>
            )
}

export default ProductList