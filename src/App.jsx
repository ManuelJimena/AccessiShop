import React, { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton';
import { Outlet, useLocation } from 'react-router-dom';
import { SearchProvider } from './context/searchContext';


const App = () => {
  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <CartProvider>
      <SearchProvider>
        <>
          <Header />
          <AccessibilityButton />
          <Outlet />
          <Footer />
        </>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;
