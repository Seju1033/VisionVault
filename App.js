import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Contect from './pages/Contect';
import About from './pages/About';
import ZerfPage from './pages/ZerfPage';
import ZealOprics from './pages/ZealOprics';
import FastrackPage from './pages/FastrackPage';
import RayBan from './pages/RayBan';
import TedBaker from './pages/TedBaker';
import VougePage from './pages/VougePage';
import ProductDetail from './pages/ProductDetail';
import AccountDetails from './component/AccountDetails';
import MyAccount from './component/MyAccount';
import OurPolicy from './pages/OurPolicy';
import ProductList from './pages/ProductList'
import Cart from './pages/Cart';
import BuyNowComponent from './component/BuyNowComponent';
import Register from './Register';
import Productlistcomponent from './component/ProductListComponent';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/zerf" element={<ZerfPage />} />
            <Route path="/vouge" element={<VougePage />} />
            <Route path="/zeal-optics" element={<ZealOprics />} />
            <Route path="/fastrack" element={<FastrackPage />} />
            <Route path="/rayban" element={<RayBan />} />
            <Route path="/ted-baker" element={<TedBaker />} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/products/product' element={<ProductDetail/>}/>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/productlist' element={<Productlistcomponent/>}/>
            <Route path='/myAccount/accountDetails' element={<MyAccount/>}/>
            <Route path='/myAccount/addressBook' element={<MyAccount/>}/>
            <Route path='/myAccount/myOrders' element={<MyAccount/>}/>
            <Route path='/myAccount/PreviousOrders' element={<MyAccount/>}/>
            <Route path='/myAccount/Whislist' element={<MyAccount/>}/>
            <Route path='/myAccount/BankDetails' element={<MyAccount/>}/>
            <Route path='/myAccount/NewsletterSubscription' element={<MyAccount/>}/>
            <Route path='/myAccount/BankDetails' element={<MyAccount/>}/>
            <Route path='/myaccount/myOrders' element={<MyAccount/>}/>
            <Route path='/ourPolicy' element={<OurPolicy />} />
            <Route path="/product/:productId" element={<ProductDetail  />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/buynow' element={<BuyNowComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
