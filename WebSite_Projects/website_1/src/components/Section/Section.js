// Dependencies
import React from 'react'
import { Link } from "react-router-dom";
// Components
import { Container, Button } from '../../styles/GlobalStyles'
import { SectionContainer, TextColumn, ImgColumn, SectionRow, TextWrapper, TopLine, HeadLine, SubTitle, ImgWrapper, Img } from './SectionElements'

//----------------------------------------------------------------

const Section = ({ lightBG, image, text, button }) => {
  
  return (
    <SectionContainer lightBG={lightBG}>
      
      <Container>
        
        <SectionRow imgStart={image.imgStart}>

            <TextColumn alignStart={image.imgStart}>
              <TextWrapper alignStart={image.imgStart}>
                  <TopLine lightTopLine={text.lightTopLine}>{text.topline}</TopLine>
                  <HeadLine lightText={text.lightText}>{text.headline}</HeadLine>
                  <SubTitle lightTextDesc={text.lightTextDesc}>{text.desc}</SubTitle>
                  <Link to='/sign-up'>
                    <Button big fontBig primary={button.primary}>{button.btnText}</Button>
                  </Link>
              </TextWrapper>
            </TextColumn>

            <ImgColumn alignStart={image.imgStart}>
              <ImgWrapper>
                <Img src={image.img} alt={image.alt} />
              </ImgWrapper>
            </ImgColumn>

        </SectionRow>

      </Container>
    
    </SectionContainer>
  )
}

export default Section;