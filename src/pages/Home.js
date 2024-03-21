import React from 'react'
import '../css/Home.css'
import IMAGES from '../assets/images'
import BannerComponent from '../component/BannerComponent'
import ShopByCategory from '../component/ShopByCategory'
import FrequentlyBuy from '../component/FrequentlyBuy'
import Description from '../component/Description'
import NewArraival from '../component/NewArraival'
import BudgetBuyScript from '../component/BudgetBuyScipt'
import BugetBuy from '../component/BugetBuy'
import MiniSection1 from '../component/MiniSection1'
import Offer from '../component/Offer'
import Guid from '../component/Guid'
import GallaryComponent from '../component/GallaryComponent'
import More from '../component/More'

function Home() {
    return (
        <>
        <div className='home-content'>
        <div className='devider'></div>
            <div className='banne-section'>
                <BannerComponent/>
            </div>
            <div className='shop-by-category-section'>
                <ShopByCategory/>
            </div>
            <div className='more'>
                <More/>
            </div>
            <div className='mini-section'>
                <MiniSection1/>
            </div>
            <div className='new-arrival-section'>
                
            </div>
            <div className='offer-section'>
                <Offer/>
            </div>
            <div className='budget-buy-section'>
                {/* <BugetBuy/> */}
            </div>
            <div className='gallary-component'>
                <GallaryComponent/>
            </div>
            <div className='guid-section'>
                {/* <Guid/> */}
            </div>
            <div className='description-section'>
                <Description/>
            </div>
        </div>
           
        </>
    )
}

export default Home