import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = ({ activeSection, onNavClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link 
          className="navbar-brand" 
          to="home" 
          smooth={true} 
          onClick={() => onNavClick('home')}
        >
          Kelly Sun
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                to="home"
                smooth={true}
                onClick={() => onNavClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                to="projects"
                smooth={true}
                onClick={() => onNavClick('projects')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                to="skills"
                smooth={true}
                onClick={() => onNavClick('skills')}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                to="contact"
                smooth={true}
                onClick={() => onNavClick('contact')}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;