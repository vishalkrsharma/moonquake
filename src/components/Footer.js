import React from 'react';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

import '../styles/Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='right'>
          <h4>About the Team</h4>
          <p>A bunch of space enthusiasts and college undergraduates working together to contribute something substrantial to the world</p>
          <div className='social'>
            <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
          </div>
        </div>
        <div className='left'>
          <h4>MADE FOR NASA XYZ COMPETITION 2022</h4>
          <p>Copyright by Lorem Ipsum @ 2022</p>
          {/*
                    VISHAL DELETE MARIS NA
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>123 Acme St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> trips@galaxy.com</h4>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
