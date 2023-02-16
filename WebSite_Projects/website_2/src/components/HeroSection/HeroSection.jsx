// Deps
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { RootHeroContainer, HeroButton } from './HeroSectionElements';
// Data
import { useDataContext } from '../../context/DataProvider';

//--------------------------------------------------------------------

const HeroSection = () => {

  const data = useDataContext();
  
  return (
    <RootHeroContainer>
      <div className="container grid grid-two-column">
        
        <div className="section-hero-data">
          <p className="hero-topline">THIS IS ME</p>
          <h1 className="hero-heading">{data.name}</h1>
          <p className="hero-para">I'm Yuvi. A Full Stack Developer, Youtuber and Freelancer.</p>
          <HeroButton className="btn hire-me-btn"><NavLink to="/contact">Hire Me</NavLink></HeroButton>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={data.image} alt="hero-image" />
          </picture>
        </div>

      </div>
    </RootHeroContainer>
  )
}

export default HeroSection;