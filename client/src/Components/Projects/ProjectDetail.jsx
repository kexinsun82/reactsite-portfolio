import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../api';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      {/* <Navigation activeSection={activeSection} onNavClick={scrollToSection} /> */}


      {/* Back to Projects */}
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="btn btn-primary">
           Back to Projects
        </button>
      </nav>

      {/* Overview */}
      <section className="project-overview">
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
      <section className="project-gallery">
        <h2>Project Gallery</h2>
        <div className="carousel">
          <button className="carousel-button prev" onClick={prevImage}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <div className="carousel-image">
            <img src={project.images[currentImageIndex]} alt={`${project.name} - Image ${currentImageIndex + 1}`} />
          </div>
          <button className="carousel-button next" onClick={nextImage}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-indicators">
          {project.images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Project Outcome */}
      <section className="project-outcome">
        <h2>Project Outcome</h2>
        <ul className="outcome-list">
          {project.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      {/* Next Project Navigation */}
      <section className="next-project">
        <h2>Next Project</h2>
        <Link to={`/projects/${project.nextProject?.name || ''}`} className="btn btn-primary">
          <span className="next-project-name">{project.nextProject?.name || ''}</span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetail; 