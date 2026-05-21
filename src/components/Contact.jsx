import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      })
      .catch(() => {
        setStatus('error');
      });
  };

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
              <a href="mailto:navadeepreddynelapatla@gmail.com" className="contact-link">
                <div className="icon-wrapper">
                  <Mail size={20} />
                </div>
                <span>navadeepreddynelapatla@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/navadeepreddynelapatla" className="contact-link" target='_blank' rel="noopener noreferrer">
                <div className="icon-wrapper">
                  <FaLinkedin size={20} />
                </div>
                <span>Linkedin</span>
              </a>

              <a href="https://github.com/NavadeepReddy08" className="contact-link" target='_blank' rel="noopener noreferrer">
                <div className="icon-wrapper">
                  <FaGithub size={20} />
                </div>
                <span>Github</span>
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="contact-form glass-card form-success-container">
              <CheckCircle2 className="form-success-icon" size={60} />
              <h3 className="form-success-title">Message Sent!</h3>
              <p className="form-success-text">
                Thank you so much for reaching out. Your message has been received, and I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setStatus(null)} 
                className="btn btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form 
              name='contact' 
              className="contact-form glass-card" 
              onSubmit={handleSubmit}
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>

              {status === 'error' && (
                <div className="form-error-message">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or email directly!</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name='name' 
                  placeholder="Your Name" 
                  required 
                  disabled={status === 'sending'} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name='email' 
                  placeholder="Your Email" 
                  required 
                  disabled={status === 'sending'} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name='message' 
                  rows="5" 
                  placeholder="Your Message" 
                  required 
                  disabled={status === 'sending'} 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    Sending... <Loader2 className="spinner" size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
