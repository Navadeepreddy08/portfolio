import React from 'react';
import { BookOpen, Award, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-card">
            <h3>Get to know me!</h3>
            <p>
              I am a Computer Science and Engineering student passionate about technology, software development, and building products that solve real-world problems. I enjoy learning new technologies and continuously improving my skills in web development, app development, Java, databases, and problem-solving.</p>

            <p>Apart from coding, I am also interested in entrepreneurship, stock market trading. I enjoy building projects, learning how successful tech products are created and scaled.

              My goal is to become a skilled software engineer, build impactful startups, and create innovative solutions that improve everyday life through technology.
            </p>

          </div>

          <div className="about-details">
            <div className="detail-card glass-card">
              <div className="detail-icon">
                <BookOpen size={24} />
              </div>
              <h4>Education</h4>
              <div style={{ marginBottom: '1.5rem' }}>
                <p className="detail-title">B.Tech in Computer Science</p>
                <p className="detail-subtitle">Kakatiya Institute of Technology and Science, Warangal (2024 - 2028)</p>
                <p className="detail-desc">CGPA: 8.90</p>
                <p className="detail-desc">Focus on Software Engineering, Data Structures, and Web Technologies.</p>
              </div>
              <div>
                <p className="detail-title">Intermediate</p>
                <p className="detail-subtitle">Narayana Junior College (2022 - 2024)</p>
                <p className="detail-desc">Marks: 985/1000</p>
                <p className="detail-desc">Focus on Mathematics, Physics, and Chemistry (MPC).</p>
              </div>
            </div>

            <div className="detail-card glass-card">
              <div className="detail-icon">
                <Award size={24} />
              </div>
              <h4>Experience & Activities</h4>
              <p className="detail-title">Web Development Intern</p>
              <p className="detail-subtitle">Tech Startup (Summer 2025)</p>
              <p className="detail-desc">Developed and maintained front-end components using React and TailwindCSS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
