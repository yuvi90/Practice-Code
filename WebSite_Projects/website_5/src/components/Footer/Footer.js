import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <h1>Pizza</h1>
        <SocialMedia>
          <SocialMediaWrap>
            <FaFacebook cursor="pointer" />
            <FaInstagram cursor="pointer" />
            <FaYoutube cursor="pointer" />
            <FaTwitter cursor="pointer" />
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;