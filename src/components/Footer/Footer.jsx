import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-item'>
          <h3>Vildan Akbulut</h3>
          <p>A web developer and designer based in Istanbul, Turkey.</p>

          <div className='footer-social'>
            <a className='facebook' href='https://www.facebook.com/'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className='twitter' href='https://twitter.com/vildanakbulutt'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='instagram' href='https://www.instagram.com/vildanakbulut_/'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className='linkedin' href='https://www.linkedin.com/in/vildanakbulutt/'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vildan Akbulut. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
