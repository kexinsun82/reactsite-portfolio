import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import profileImage from '../../assets/profile.jpg';
import './Home.css';

const Home = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPosition, setCurrentPosition] = useState(0);

  const positions = [
    'Full Stack Developer',
    'Web Designer',
    'UX/UI Designer',
    'Frontend Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      delay: 0,
      smooth: 'easeInOutQuart'
    });
    setActiveSection(sectionId);
  };

  return (
    <div className="home-container">
      <Navigation 
        activeSection={activeSection} 
        onNavClick={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <section id="home" className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="introname">Hello, I'm Kelly Sun</h1>
              <div className="position-container">
                <p className="position">
                  {positions.map((position, index) => (
                    <span
                      key={position}
                      className={`position-text ${
                        index === currentPosition ? 'active' : ''
                      }`}
                    >
                      {position}
                    </span>
                  ))}
                </p>
              </div>
              <p className="intro-text">Welcome to my portfolio! I’m a dedicated web developer creating user-centric digital experiences through innovative development and thoughtful design. <br />
                Take a look around — and if something catches your eye or you’d like to collaborate, feel free to reach out!</p>
              <div className="mt-4">
                <Link
                  to="projects"
                  smooth={true}
                  className="btn btn-primary me-2"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Link>
                <Link
                  to="contact"
                  className="btn btn-outline-primary"
                  smooth={true}
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="img-fluid rounded-circle profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;