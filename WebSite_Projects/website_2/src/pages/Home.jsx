// Deps
import React, { useEffect } from 'react';
// Components
import { HeroSection, Services } from '../components';
import Contact from "./Contact";
// Data
import { useDataContext } from '../context/DataProvider';

//-------------------------------------------------------

const Home = () => {

  const data = useDataContext();

  useEffect(() => {
    data.updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}

export default Home;