import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyAccount from './component/MyAccount';
import Movie from './component/Movie';
import Blog from './component/Blog';
import FilterComponent from './component/FilterComponent';
import Api from './component/Api';
import DeliveryDateChecker from './component/DeliveryDateChecker';
import ProductDetail from './pages/ProductDetail';
import Demo from '../src/pages/Demo'
import Register from './Register';
import Login from './pages/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
