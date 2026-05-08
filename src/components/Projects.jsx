import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'School Management System',
      description: 'School Management System is a digital platform designed to manage student records, attendance, marks, fees. It helps schools automate daily administrative tasks and improve overall management through an easy-to-use system.',
      image: '/assets/Screenshot%202026-05-08%20133230.png',
      tech: ['React', 'Chart.js', 'CSS Modules'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'A sleek, mobile-first e-commerce platform featuring a dark mode interface with vibrant violet accents and smooth animations.',
      image: '/assets/project_ecommerce_1778222697983.png',
      tech: ['React Native', 'Redux', 'Node.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Village Voice',
      description: 'Village Voice is a village complaint management system designed to help people report local issues such as road damage, water problems, street light failures, drainage issues, and garbage collection complaints easily through a website.',
      image: '/assets/Screenshot%202026-05-08%20132711.png',
      tech: ['React', 'Monaco Editor', 'Socket.io'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="icon-link" aria-label="GitHub Repository">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.demo} className="icon-link" aria-label="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
