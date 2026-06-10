import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import Photo from '../assets/downloader.jpg'

function Hero() {
  // Function to handle resume download
  const handleResumeDownload = () => {
    // You can replace this with actual resume file path
    const resumeUrl = '/resume.pdf'; // Change to your actual resume path
    window.open(resumeUrl, '_blank');
  };

  // Function to handle contact button click
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hey I'm Dhruvi Patel</h1>
            <h2>Motivated Full-Stack Developer</h2>
            <p className="hero-tagline">
              Creating responsive, user-friendly web solutions through innovation,
              continuous learning, and dedication.
            </p>
            
            {/* Buttons Container */}
            <div className="hero-buttons">
              {/* Download Resume Button */}
              <button 
                className="btn btn-download" 
                onClick={handleResumeDownload}
              >
                <FiDownload className="btn-icon" />
                <span>Download Resume</span>
              </button>
              
              {/* Get in Touch Button */}
              <button 
                className="btn btn-contact" 
                onClick={handleContactClick}
              >
                <FiMail className="btn-icon" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={Photo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;