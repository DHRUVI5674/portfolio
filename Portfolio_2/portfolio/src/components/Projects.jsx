import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Yatra Travel Website UI Design",
      description: "A modern travel booking website design crafted by Yatra, featuring flight, hotel, and holiday package integration with a clean, user-friendly layout.",
      link: "#"
    },
    {
      title: "Cleaning Service Website",
      description: "A responsive cleaning website designed to showcase services, pricing, and easy booking with a clean and trustworthy visual style.",
      link: "#"
    },
    {
      title: "Book MyShow Ticket Booking UI",
      description: "A movie ticket booking website design inspired by BookMyShow, focusing on event listings, seat selection, and smooth user navigation.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                Project {index + 1}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="view-link">
                  View Figma →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;