// Deps
import React, { useEffect } from 'react';
// Components
import { HeroSection } from '../components';
// Data
import { useDataContext } from '../context/DataProvider';

//-------------------------------------------------------

const About = () => {

  const data = useDataContext();

  useEffect(() => {
    data.updateAboutPage();
  }, []);

  return (
    <>
      <HeroSection />
    </>
  )
}

export default About