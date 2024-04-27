import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
library.add(faFutbol);


const LandingPage = () => {
  return (

    <div className="landing-page-container" data-testid="landing-page">
      <section id="peri" className="about-us-section">
        <div className="about-us-content">
          <h2>Hero section</h2><h1>Hero section</h1>
          <h2>Hero section.</h2>
          <h3>Hero section Hero section Hero section Hero section Hero section.</h3>
          <p>Hero section paragraph Hero section paragraph Hero section paragraph Hero section paragraph Hero section paragraph.</p>
        </div>
        <div className="about-us-image">
          <img src={require("../../images/logo192.png")} alt="About Us" />
        </div>
      </section>


      <section className="social-media">
        <h2>Socials</h2>
        <div className="social-icons"><a href="https://www.instagram.com/juangunner4/" target="_blank" className="social-icon">
          <FontAwesomeIcon icon={['fab', 'fa-instagram']} />
        </a>
          <a href="https://twitter.com/Juangunner4/" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'fa-twitter']} />
          </a>
          <a href="https://github.com/Juangunner4/" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'fa-github']} />
          </a>
          <a href="https://www.youtube.com/@Juangunner4/" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'fa-youtube']} />
          </a>
          <a href="https://www.linkedin.com/in/juan-vazquez1019/" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'fa-linkedin']} />
          </a>
          <a href="https://www.twitch.tv/juangunner4/" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'fa-twitch']} />
          </a>
        </div>
      </section>

      <section id="story" class="event-media">
        <h2>Story</h2>
      </section>

      <section id="meme" className="contact-us-section">
        <div className="contact-us-container">
          <h2>MEME</h2>
        </div>

      </section>
    </div>

  );
};

export default LandingPage;
