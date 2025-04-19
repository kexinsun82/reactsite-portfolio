import React, { useEffect, useState } from 'react';
import api from '../../api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.skills.getAll();
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError('Unable to load skill data');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // 获取技能等级对应的样式类
  const getLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return 'level-advanced';
      case 'intermediate':
        return 'level-intermediate';
      case 'beginner':
        return 'level-beginner';
      default:
        return 'level-beginner';
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level ${getLevelClass(skill.level)}`}>
                      {skill.level}
                    </span>
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