import React from 'react';
import teamMember from '../images/6342.png';
import meme1 from '../images/meme1.jpg';
import meme2 from '../images/meme2.png';
import meme3 from '../images/meme3.png';
import '../styles/Team.css';
import '../styles/CEXListings.css';
import '../styles/MemeGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Tokenomics from './Tokenomics';

function About() {
    return (
        <div className="about-container">
            {/* Tokenomics Section */}

            <Tokenomics/>

            {/* Team Section */}
            <section className="team">
                <h2>Our Team</h2>
                <div className="team-member">
                    <img src={teamMember} alt="Team Member" />
                    <div className="team-info">
                        <p>0x1JuanGunner4 - Founder & CEO</p>
                        <div className="social-icons">
                            <a href="https://https://x.com/0x1JuanGunner4" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEX Listings Section */}
            <section className="cex-listings">
                <h2>CEX Listings</h2>
                <p>Coming Soon...</p>
            </section>

            {/* Meme Gallery Section */}
            <section className="meme-gallery">
                <h2>Meme Gallery</h2>
                <div className="meme-images">
                    <img src={meme1} alt="Meme 1" />
                    <img src={meme2} alt="Meme 2" />
                    <img src={meme3} alt="Meme 2" />
                    {/* Add more meme images as needed */}
                </div>
            </section>
        </div>
    );
}

export default About;
