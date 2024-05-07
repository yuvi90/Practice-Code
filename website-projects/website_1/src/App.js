// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { GlobalStyles } from './styles/GlobalStyles';
import { Footer, NavBar } from './components';
import { Home } from './pages/index';
import ScrollToTop from './ScrollToTop';

//----------------------------------------------------------------

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App