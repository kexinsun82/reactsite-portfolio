import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ activeSection, onNavClick, isDarkMode, toggleTheme }) => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/projects/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onNavClick(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <RouterLink 
          className="navbar-brand" 
          to="/"
        >
          Kelly Sun
        </RouterLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {!isProjectDetail ? (
              <>
                <li className="nav-item">
                  <ScrollLink 
                    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                    to="home"
                    smooth={true}
                    onClick={() => handleNavClick('home')}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink 
                    className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                    to="projects"
                    smooth={true}
                    onClick={() => handleNavClick('projects')}
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink 
                    className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                    to="skills"
                    smooth={true}
                    onClick={() => handleNavClick('skills')}
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink 
                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                    to="contact"
                    smooth={true}
                    onClick={() => handleNavClick('contact')}
                  >
                    Contact Me
                  </ScrollLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <RouterLink 
                  className="nav-link"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Back to Home
                </RouterLink>
              </li>
            )}
            <li className="nav-item">
              <button onClick={toggleTheme} className="nav-link">
                <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;