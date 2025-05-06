import React, { useEffect, useState } from 'react';
import api from '../../api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.projects.getAll();
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Unable to load project data');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="projects-container">
      <h2 id="projects">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.name} />
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-project"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;