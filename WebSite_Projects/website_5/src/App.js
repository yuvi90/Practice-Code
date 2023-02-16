import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import { GlobalStyle } from './GlobalStyle';
import { HeroSection, Products, Featured , ProductData1, ProductData2, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeroSection />
      <Products heading="Choose your favorite Pizza" data={ProductData1} />
      <Featured />
      <Products heading="Sweets Treats for You" data={ProductData2} />
      <Footer />
    </BrowserRouter>
  )
}

export default App