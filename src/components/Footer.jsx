import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">NN<span className="glow-text">R</span></span>
          </div>

          <p className="footer-text">
            "Built by Navadeep Reddy" &copy; {currentYear}. All rights reserved.
          </p>

          <div className="footer-social">
            <a href="https://github.com/NavadeepReddy08" className="social-icon" aria-label="GitHub" target='_blank'>
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/navadeepreddynelapatla" className="social-icon" aria-label="LinkedIn" target='_blank'>
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/NavadeepRe23569" className="social-icon" aria-label="Twitter" target='_blank'>
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
