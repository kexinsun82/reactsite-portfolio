import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
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
              <p className="short-description">{project.shortDescription || project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <Link
                  to={`/projects/${project.slug}`}
                  className="btn btn-project"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;