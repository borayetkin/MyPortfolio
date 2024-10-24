// AboutPage.jsx
import React from "react";
import "../styles/AboutPage.css"; // Importing the new CSS file
import aboutData from "../data/aboutData.json"; // Importing JSON data

const AboutPage = () => {
  return (
    <div className="main-content about-page">
      <h1>About</h1>
      <ul className="about-list">
        {aboutData.about.map((section) => (
          <li key={section.id} className="about-section">
            <h2>{section.title}</h2>
            <p className="location">{section.location}</p>{" "}
            <p className="date">{section.date}</p>
            <p className="content">{section.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
