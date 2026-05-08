import React, { useEffect, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['AI enthusiast', 'Full Stack Developer', 'Problem Solver'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, typingSpeed, loopNum]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Navadeep Reddy</h1>
          <h2 className="title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="intro">
            I'm a passionate CSE student exploring the world of web development.
            I love building clean, modern, and user-centric digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Send size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img src="/assets/WhatsApp Image 2026-05-08 at 3.11.47 PM.jpeg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
