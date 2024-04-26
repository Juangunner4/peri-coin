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
      <section id="about" className="about-us-section">
        <div className="about-us-content">
          <h2>Hi, there my name is</h2><h1>Juan Vazquez.</h1>
          <h2>I enjoy building websites.</h2>
          <h3>Bridging the gap between code and the field: the soccer-loving software engineer.</h3>
          <p>I am a software engineer focusing in building websites with one of a kind experience. I am currently focused on full-stack development at J.B.Hunt.</p>
        </div>
        <div className="about-us-image">
          <img src={require("../../images/logo192.png")} alt="About Us" />
        </div>
      </section>


      <section className="social-media">
        <h2>Follow Me on social media</h2>
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

      <section id="event" class="event-media">
        <h2>Schedule and event with me</h2>
        <div class="event-icons" title="Schedule a futbol event">
          <a href="https://calendly.com/juangunner4/futbol-coaching-1-on-1" target="_blank"><i class="fa-futbol"><FontAwesomeIcon icon={['faFutbol', 'fa-futbol']} /></i></a>
        </div>
      </section>

      <section id="contact" className="contact-us-section">
        <div className="contact-us-container">
          <h2>Contact Me</h2>
          <form className="contact-form" method="post" action="contact-form-handler.php">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" row="6" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>
    </div>

  );
};

export default LandingPage;
