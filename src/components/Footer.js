import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Perico. All rights reserved.</p>
      <p className="disclaimer">
        Disclaimer: $PERI is a memecoin and has no utility. Don't risk money you are afraid of losing. The price may go up or down. We are not responsible for the token's price.
      </p>
      <div className="footer-links">
        <div className="contract">
          <a
            href="https://solscan.io/address/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} /> View Contract
          </a>
        </div>
        <div className="contact">
          <a href="mailto:contact@perionsol.xyz">contact@perionsol.xyz</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
