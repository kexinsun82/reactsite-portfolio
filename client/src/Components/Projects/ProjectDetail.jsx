import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../api';
import Navigation from '../Navigation/Navigation';
import './ProjectDetail.css';
import Footer from '../Footer/Footer';

const ProjectDetail = ({ isDarkMode, toggleTheme }) => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log('Fetching project:', projectName);
        const response = await api.projects.getOne(projectName);
        console.log('API Response:', response);
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error details:', err);
        setError(`Unable to load project details: ${err.message}`);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectName]);

  // Auto play images
  useEffect(() => {
    if (!project) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [project]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!project) return <div className="error">Project not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail-container">

      {/* Back to Projects */}
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          <i className="bi bi-arrow-left"></i> Back to Projects
        </button>
      </nav>

      {/* Overview */}
      <section id="overview" className="project-overview">
        <h1>{project.name}</h1>
        <p className="project-description">{project.description}</p>
      </section>

      {/* Links */}
      <section className="project-links">
        {project.figmaUrl && (
          <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="bi bi-figma"></i> View Figma
          </a>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            <i className="bi bi-globe"></i> Visit Website
          </a>
        )}
      </section>

      {/* Project Gallery */}
      <section id="gallery" className="project-gallery">
        <h2>Project Gallery</h2>
        <div className="carousel">
          <div className="carousel-image">
            <img src={project.images[currentImageIndex]} alt={`${project.name} - Image ${currentImageIndex + 1}`} />
            <div className="carousel-indicators">
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Outcome and Team */}
      <section id="outcome" className="project-details">
        <div className="outcome-section">
          <h2>Outcome</h2>
          <ul className="outcome-list">
            {project.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div className="team-section">
          <h2>Team</h2>
          <ul className="team-members">
            {project.team.map((team, index) => (
              <li key={index}>{team}</li>
            ))}
          </ul>
        </div>
        <div className="year">
            <h2>Year</h2>
            <p>{project.year}</p>
          </div>
      </section>

      {/* Next Project Navigation */}
      <section className="next-project">
        <h2>Next Project</h2>
        <Link to={`/projects/${project.nextProject?.name || ''}`} className="btn btn-primary">
          <span className="next-project-name">{project.nextProject?.name || ''}</span>
        </Link>
      </section>

      <Footer />
    </div>

    
  );
};

export default ProjectDetail; 