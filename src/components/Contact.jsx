import React from 'react';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {


  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info glass-card">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-links">
              <a href="mailto:alex@example.com" className="contact-link">
                <div className="icon-wrapper">
                  <Mail size={20} />
                </div>
                <span>navadeepreddynelapatla@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/navadeepreddynelapatla" className="contact-link" target='_blank'>
                <div className="icon-wrapper">
                  <FaLinkedin size={20} />
                </div>
                <span>Linkedin</span>
              </a>

              <a href="https://github.com/NavadeepReddy08" className="contact-link" target='_blank'>
                <div className="icon-wrapper">
                  <FaGithub size={20} />
                </div>
                <span>Github</span>
              </a>
            </div>
          </div>

          <form name='contact' className="contact-form glass-card" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name='name' placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name='email' placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name='message' rows="5" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
