import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedis, SiMaterialdesign, SiCplusplus } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, level: 88, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 82, color: "#000000" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 90, color: "#06B6D4" },
    { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, level: 78, color: "#47A248" },
    { name: "Redis", icon: <SiRedis />, level: 75, color: "#DC382D" },
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F05032" },
    { name: "Figma", icon: <FaFigma />, level: 88, color: "#F24E1E" },
    { name: "Material UI", icon: <SiMaterialdesign />, level: 85, color: "#007FFF" },
    { name: "Docker", icon: <FaDocker />, level: 72, color: "#2496ED" },
    { name: "C++", icon: <SiCplusplus />, level: 85, color: "#00599C" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>My proficiency in different technologies</p>
        </div>
        
        <div className="circular-skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="circular-skill">
              <div className="circular-progress" style={{ 
                background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #1e293b 0deg)`
              }}>
                <div className="circular-inner">
                  <div className="circular-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="circular-percent">{skill.level}%</span>
                </div>
              </div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;