import React from 'react';
// import api from '../../api';
import {skills} from '../../data/skills';
import './Skills.css';

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // const getLevelClass = (level) => {
  //   switch (level.toLowerCase()) {
  //     case 'advanced':
  //       return 'level-advanced';
  //     case 'intermediate':
  //       return 'level-intermediate';
  //     case 'beginner':
  //       return 'level-beginner';
  //     default:
  //       return 'level-beginner';
  //   }
  // };

  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {Object.keys(skillsByCategory).map((category) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skillsByCategory[category].map((skill) => (
                <div key={skill._id || skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;