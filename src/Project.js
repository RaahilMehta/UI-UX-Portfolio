import React from "react";
import './styles.css'; 
import './Project.css';
import { Link } from "react-router-dom";

const projects = [
  { 
      title: "Designs",  
      image: "/assets/Frame 5.png",
      link: "/design",
  },
  { 
      title: "WebDev",  
      image: "/assets/Frame 6.png",
      link: "/webdev",
  },
];

function Projects() {
  return (
    <section id="projects"> {/* Add the id here */}
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Replace 'a' with 'Link' to navigate within the app */}
            <Link to={project.link}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className={project.className}>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
