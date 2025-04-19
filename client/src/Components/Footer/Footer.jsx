import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="location">
          <i className="bi bi-geo-alt"></i> Toronto, ON, Canada
        </div>
        <div className="links">
          <a href="https://github.com/kexinsun82" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kellysun82" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="copyright">
          &copy; Kexin Sun - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 