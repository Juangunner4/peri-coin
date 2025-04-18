import React from 'react';
import teamMember from '../images/web3.jpg';
import meme1 from '../images/meme1.jpg';
import meme2 from '../images/meme2.png';
import meme3 from '../images/meme3.png';
import meme4 from '../images/meme4.png';
import meme5 from '../images/meme5.png';
import meme6 from '../images/meme6.png';
import meme7 from '../images/meme7.png';
import meme8 from '../images/meme8.png';
import meme9 from '../images/meme9.png';
import meme10 from '../images/meme10.png';
import meme11 from '../images/meme11.jpg';
import meme12 from '../images/meme12.jpg';
import meme13 from '../images/meme13.jpg';
import '../styles/Team.css';
import '../styles/CEXListings.css';
import '../styles/MemeGallery.css';
import Tokenomics from '../components/Tokenomics';
import { useTranslation } from 'react-i18next';


function About() {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            {/* Tokenomics Section */}

            <Tokenomics />

            {/* Team Section */}
            <section className="team">
                <h2>{t("team")}</h2>
                <div className="team-member">
                    <img src={teamMember} alt="CEO" />
                    <div className="team-info">
                        <a href="https://x.com/0x1Juangunner4" target="_blank" rel="noopener noreferrer" className="member-link">
                            {t("member1")}
                        </a>
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
                    <img src={meme8} alt="Meme 8" />
                    <img src={meme9} alt="Meme 9" />
                    <img src={meme10} alt="Meme 9" />
                    <img src={meme11} alt="Meme 9" />
                    <img src={meme12} alt="Meme 9" />
                    <img src={meme13} alt="Meme 9" />
                    {/* Add more meme images as needed */}
                </div>
            </section>
        </div>
    );
}

export default About;
