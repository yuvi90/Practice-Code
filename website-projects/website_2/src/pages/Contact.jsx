// Deps
import React from 'react';
// Components
import { ContactMainContainer } from "./ContactElements";

//----------------------------------------

const Contact = () => {
  return (
    <ContactMainContainer>
      <h2 className="common-heading">Feel Free To Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.467891989324!2d75.8016662347333!3d30.873569426999584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a8a5e07a99%3A0x914f64510a9553e!2sKeys%20Cafe%20-%20Keys%20Hotel!5e0!3m2!1sen!2sin!4v1665759227470!5m2!1sen!2sin"
        width="100%"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="#" method="post" className="contact-inputs">
            {/* For getting data from forms add action url from formspree.io */}
            
            <input
              type="text"
              name="username"
              placeholder="Your name..."
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              autoComplete="off"
              required
            />

            <textarea name="message" id="" cols="30" rows="6" placeholder="Enter your message..." autoComplete="off" required>
            </textarea>

            <input type="submit" value="send"/>

          </form>
        </div>
      </div>

    </ContactMainContainer>
  )
}

export default Contact