import React, { useState } from 'react';
//Components
import { HeroSectionContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroSectionElements';
import TopNavBar from '../TopNavBar/TopNavBar';
import SideMenu from '../SideMenu/SideMenu';

const HeroSection = () => {

  const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () => {
        setIsOpen((prevIsOpen)=>!prevIsOpen);
    }

  return (
    <HeroSectionContainer>
      <TopNavBar toogleMenu={toogleMenu} />
      <SideMenu isOpen={isOpen} toogleMenu={toogleMenu} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroSectionContainer>
  )
}

export default HeroSection;