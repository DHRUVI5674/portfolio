import React from 'react';
import freecodecampResponsive from '../assets/freecodecamp_responsive.png';
import cppSimpli from '../assets/cpp_simpli.png';
import problemHacker from '../assets/problem_hacker.png';
import cSolo from '../assets/c_solo.png';

function Certificates() {
  const certificates = [
    {
      id: 1,
      image: freecodecampResponsive,
      title: "Legacy Web Design v8",
      issuer: "FreeCodeCamp",
      description: "Certification covering essential web design concepts and responsive layouts. Built a strong foundation in HTML, CSS, and modern UI design practices.",
      date: "28 Dec 2025",
      category: "Web Development",
      color: "#0a0a23"
    },
    {
      id: 2,
      image: cppSimpli,
      title: "C++ Advanced Course",
      issuer: "Simplilearn & Ahmad Bazzi",
      description: "Covering advanced programming concepts and object-oriented principles. Enhanced skills in C++ development, problem-solving, and efficient code design.",
      date: "5 Jan 2026",
      category: "Programming",
      color: "#2d2d2d"
    },
    {
      id: 3,
      image: problemHacker,
      title: "Problem Solving",
      issuer: "HackerRank",
      description: "Focusing on algorithmic thinking and efficient solutions. Strengthened skills in data structures, logic building, and coding problem analysis.",
      date: "25 Nov 2025",
      category: "Algorithms",
      color: "#1e8449"
    },
    {
      id: 4,
      image: cSolo,
      title: "Introduction to C",
      issuer: "SoloLearn",
      description: "Covering core programming concepts and syntax. Built a strong foundation in C programming, problem-solving, and logical thinking.",
      date: "1 Jan 2026",
      category: "Programming",
      color: "#004085"
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-title">
          <h2>My Certifications</h2>
          <p>Professional certifications and achievements</p>
        </div>
        
        <div className="certificates-container">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              {/* Certificate Image/Icon */}
              <div 
                className="certificate-image"
                style={{ backgroundColor: cert.color }}
              >
                <div className="certificate-icon w-full h-full overflow-hidden flex items-center justify-center p-2">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="certificate-badge">
                  <span className="badge-text">Verified</span>
                </div>
              </div>
              
              {/* Certificate Content */}
              <div className="certificate-content">
                <div className="certificate-header">
                  <span className="certificate-category">{cert.category}</span>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">by {cert.issuer}</p>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-actions">
                  <button className="view-cert-btn">
                    <span>View Certificate</span>
                    <svg className="view-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  
                  <button className="download-btn">
                    <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}

export default Certificates;