// Deps
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// Components
import { FooterMainContainer } from './FooterElements';
import { Button } from "../../styles/GlobalComponents";

//-----------------------------------------------------

const Footer = () => {
  return (
    <FooterMainContainer>
      
      <section className="contact-card">
        <div className="contact-card__grid grid grid-two-column">

          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>

        </div>
      </section>

      <section className="footer">
        
        <div className="footer--upper container grid grid-four-column">

          <div className="footer--upper--about">
            <h3>Yuvi Technical</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="footer--upper--subscribe">
            <h3>Subscribe to get updates</h3>
            <form action="#">
              <input type="email" required autoComplete="none" placeholder="Enter your email..." />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer--upper--social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <div><NavLink><FaFacebook className="icons" /></NavLink></div>
              <div><NavLink><FaInstagram className="icons" /></NavLink></div>
              <div><NavLink><FaYoutube className="icons" /></NavLink></div>
            </div>
          </div>

          <div className="footer--upper--about">
            <h3>Call Us</h3>
            <a href="tel:9872479431">+91-9872479431</a>
          </div>

        </div>

        <hr/>

        <div className="footer--bottom">
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Yuvi Technical. All Rights Reserved</p>
            <div>
              <a href='#' className='footer-bottom-links'>Privacy Policy</a>
              <a href='#' className='footer-bottom-links'>Terms & Conditions</a>
            </div>
          </div>
        </div>

      </section>

    </FooterMainContainer>
  )
}

export default Footer