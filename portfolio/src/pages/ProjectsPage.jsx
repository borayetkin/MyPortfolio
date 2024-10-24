import React from "react";
import "../styles/ProjectsPage.css";
import projectData from "../data/projectData.json"; // Importing JSON data

const ProjectsPage = () => {
  return (
    <div className="main-content projects-page">
      <h1>Projects</h1>
      <ul className="projects-list">
        {projectData.projects.map((project) => (
          <li key={project.id} className="projects-section">
            <h2>{project.title}</h2>
            <p className="location">{project.location}</p>
            <p className="date">{project.date}</p>
            <p className="content">{project.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
