import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects, getProjectBySlug, getProjectByName } from '../../data/projects';
import Navigation from '../Navigation/Navigation';
import './ProjectDetail.css';

const ProjectDetail = ({ isDarkMode, toggleTheme }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { projectName, slug } = params;
  const [project, setProject] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let found = null;
    if (slug) {
      found = getProjectBySlug(slug);
    }
    if (!found && projectName) {
      const decoded = decodeURIComponent(projectName);
      found = getProjectBySlug(decoded) || getProjectByName(decoded);
    }
    setProject(found || null);
    setCurrentImageIndex(0);

    window.scrollTo({ top: 0, behavior: 'smooth'});
  }, [slug, projectName]);

  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const showPrev = () => {
    if (!project || !project.images) return;
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const showNext = () => {
    if (!project || !project.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  if (!project) {
    return <div className="error">Project not found</div>;
  }

  return (
    <div className="project-detail-container">

      <div className="back-row">
        <Link className='btn btn-primary' to={"/"}>Home</Link>
        <Link className="btn btn-outline-primary" onClick={() => navigate(-1)}>
          Back
        </Link>
      </div>

      {/* Overview */}
      <section id="overview" className="project-overview">
        <h1>{project.name}</h1>
        <p className="project-description">{project.description}</p>
      </section>

      {project.challenge && (
        <section id='challenge' className='project-challenge'>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </section>
      )}

      {project.solution && project.solution.length > 0 && (
        <section id='solution' className='project-solution'>
        <h2>Solution</h2>
          <ul className='solution-list'>
            {project.solution.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Links */}
      <section className="project-links">
        {project.figmaUrl && (
          <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Figma
          </a>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            Visit Website
          </a>
        )}
      </section>

      {/* Image carousel */}
      <section id="gallery" className="project-gallery">
        <h2>Project Gallery</h2>
        {project.images && project.images.length > 0 && (
          <div className="carousel">
            <button className="carousel-button prev btn btn-primary" onClick={showPrev} aria-label="Previous image">‹</button>
            <div className="carousel-image">
              <img src={project.images[currentImageIndex]} alt={`${project.name} - ${currentImageIndex + 1}`} />
            </div>
            <button className="carousel-button next btn btn-primary" onClick={showNext} aria-label="Next image">›</button>
          </div>
        )}
      </section>

      {/* Outcome and Team */}
      <section id="outcome" className="project-details">
        <div className="outcome-section">
          <h2>Outcome</h2>
          <ul className="outcome-list">
            {(project.outcomes || []).map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div className="team-section">
          <h2>Team</h2>
          <ul className="team-members">
            {(project.team || []).map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        <div className="year">
          <h2>Year</h2>
          <p>{project.year}</p>
        </div>
      </section>

      {/* Next Project */}
      <section className="next-project">
        <h2>Next Project</h2>
        {project.nextProject?.name && (
          (() => {
            const next = projects.find(p => p.name === project.nextProject.name);
            return next ? (
              <Link to={`/projects/${next.slug}`} className="btn btn-primary">
                <span className="next-project-name">{next.name}</span>
              </Link>
            ) : null;
          })()
        )}
      </section>
    </div>
  );
};

export default ProjectDetail; 