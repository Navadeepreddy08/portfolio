import React from 'react';
import './Skills.css';

const Skills = () => {
  const coreSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 70 }
  ];

  const otherSkills = [
    'Git & GitHub', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Figma', 'C++'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="core-skills glass-card">
            <h3>Technical Proficiency</h3>
            <div className="skills-list">
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="other-skills glass-card">
            <h3>Additional Tools & Technologies</h3>
            <div className="skills-grid">
              {otherSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
