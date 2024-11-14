import React from 'react';
import teamMember from '../images/6342.png';
import meme1 from '../images/meme1.jpg';
import meme2 from '../images/meme2.png';
import meme3 from '../images/meme3.png';
import meme4 from '../images/meme4.png';
import meme5 from '../images/meme5.png';
import meme6 from '../images/meme6.png';
import meme7 from '../images/meme7.png';
import '../styles/Team.css';
import '../styles/CEXListings.css';
import '../styles/MemeGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Tokenomics from './Tokenomics';
import { useTranslation } from 'react-i18next';


function About() {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            {/* Tokenomics Section */}

            <Tokenomics/>

            {/* Team Section */}
            <section className="team">
                <h2>{t("team")}</h2>
                <div className="team-member">
                    <img src={teamMember} alt="Team Member" />
                    <div className="team-info">
                        <p>{t("member1")}</p>
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
                <h2>{t("cex")}</h2>
                <p>{t("upcoming")}</p>
            </section>

            {/* Meme Gallery Section */}
            <section className="meme-gallery">
                <h2>{t("memes")}</h2>
                <div className="meme-images">
                    <img src={meme1} alt="Meme 1" />
                    <img src={meme2} alt="Meme 2" />
                    <img src={meme3} alt="Meme 3" />
                    <img src={meme4} alt="Meme 4" />
                    <img src={meme5} alt="Meme 5" />
                    <img src={meme6} alt="Meme 6" />
                    <img src={meme7} alt="Meme 7" />
                    {/* Add more meme images as needed */}
                </div>
            </section>
        </div>
    );
}

export default About;
