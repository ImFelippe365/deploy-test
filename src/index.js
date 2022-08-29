import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer/index';

// Global styles
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

