import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

function About() {
  return (
    <>
    <Helmet>
        <title>About Me - Dhruvi Patel</title>
        <meta 
          name="description" 
          content="Learn more about Dhruvi Patel, a passionate full-stack developer with a knack for problem-solving and continuous learning." 
        />
      </Helmet>
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my background and passion</p>
        </div>
        <div className="about-content-no-image">
          <div className="about-text-detailed">
            <div className="about-intro">
              <h3>Curious & Driven Full-Stack Developer</h3>
              <p className="highlight-text">
                I am passionate about creating meaningful web solutions that make a difference.
              </p>
            </div>
            
            <div className="about-details">
              <div className="about-point">
                <span className="point-icon">🚀</span>
                <div>
                  <h4>Problem Solver</h4>
                  <p>
                    I enjoy tackling complex challenges and finding efficient solutions. 
                    Whether it's optimizing performance or implementing new features, 
                    I approach problems with creativity and determination.
                  </p>
                </div>
              </div>
              
              <div className="about-point">
                <span className="point-icon">📚</span>
                <div>
                  <h4>Continuous Learner</h4>
                  <p>
                    Technology evolves rapidly, and I'm committed to staying updated. 
                    I dedicate time daily to learning new technologies, frameworks, 
                    and best practices to enhance my skills.
                  </p>
                </div>
              </div>
              
              <div className="about-point">
                <span className="point-icon">💡</span>
                <div>
                  <h4>Concept to Reality</h4>
                  <p>
                    I specialize in transforming abstract concepts into working, 
                    production-ready applications. From ideation to deployment, 
                    I ensure every project meets quality standards.
                  </p>
                </div>
              </div>
              
              <div className="about-point">
                <span className="point-icon">🎯</span>
                <div>
                  <h4>Clean Code Advocate</h4>
                  <p>
                    With a growth mindset and passion for clean, maintainable code, 
                    I build applications that are both visually appealing and 
                    performance-driven. Code quality and best practices are my priority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <p className="cta-text">
                I believe in creating solutions that not only work but also 
                provide exceptional user experiences. Let's build something amazing together!
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="contact-btn">
                  <span>📧</span> Contact Me
                </Link>
                <a href="#" className="download-btn">
                  <span>📄</span> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;