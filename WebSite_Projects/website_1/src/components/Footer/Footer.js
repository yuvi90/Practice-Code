// Dependencies
import React from 'react';
// Components
import { FooterContainer, SubcriptionWrapper, SubscribeBtn, FooterLinksContainer, FooterLinksWrapper, FooterLinks } from "./FooterElements";

//----------------------------------------------------------------

const Footer = () => {
    return (
        <FooterContainer>
            
            <SubcriptionWrapper>
                <p>Join our exclusive membership to recieve the latest news and trends</p>
                <p className='SubText'>You can unsubscribe at any time.</p>
                <form action="/">
                    <input type="email" placeholder='Your Email' required className='emailInput'/>
                    <SubscribeBtn fontBig type="submit">Subscribe</SubscribeBtn>
                </form>
            </SubcriptionWrapper>
           
            <FooterLinksContainer>
                
                <FooterLinksWrapper>

                    <div className='Footer-Links-Items'>
                        <h1>About Us</h1>
                        <FooterLinks to='/'>How it works</FooterLinks>
                        <FooterLinks to='/'>Testimonials</FooterLinks>
                        <FooterLinks to='/'>Careers</FooterLinks>
                        <FooterLinks to='/'>Terms of Service</FooterLinks>
                    </div>

                    <div className='Footer-Links-Items'>
                        <h1>Contact Us</h1>
                        <FooterLinks to='/'>Contact</FooterLinks>
                        <FooterLinks to='/'>Support</FooterLinks>
                        <FooterLinks to='/'>Destinations</FooterLinks>
                        <FooterLinks to='/'>Sponsorships</FooterLinks>
                    </div>
                
                </FooterLinksWrapper>   

                <FooterLinksWrapper>

                    <div className='Footer-Links-Items'>
                        <h1>Videos</h1>
                        <FooterLinks to='/'>Submit Video</FooterLinks>
                        <FooterLinks to='/'>Ambassadors</FooterLinks>
                        <FooterLinks to='/'>Agency</FooterLinks>
                        <FooterLinks to='/'>Influencer</FooterLinks>
                    </div>

                    <div className='Footer-Links-Items'>
                        <h1>Social Media</h1>
                        <FooterLinks to='/'>Instagram</FooterLinks>
                        <FooterLinks to='/'>Facebook</FooterLinks>
                        <FooterLinks to='/'>Youtube</FooterLinks>
                        <FooterLinks to='/'>Twitter</FooterLinks>
                    </div>

                </FooterLinksWrapper>   

            </FooterLinksContainer>

        </FooterContainer>
    )
}

export default Footer