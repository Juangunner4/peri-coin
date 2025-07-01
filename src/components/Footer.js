import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>&copy;{t("copyr")}
      </p>
      <p className="disclaimer">
        {t("disclaimer")}
      </p>
      <div className="footer-links">
        <div className="contract">
          <a
            href="https://solscan.io/address/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} /> {t("contract")}
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
