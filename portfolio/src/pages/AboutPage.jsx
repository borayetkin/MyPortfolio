import React from "react";
import "../styles/AboutPage.css"; // Importing the new CSS file

const AboutPage = () => {
  return (
    <div className="main-content about-page">
      <h1>About Me</h1>
      <ul className="about-list">
        <li className="about-section">
          <h2>Education</h2>
          <p className="date">2021 - Present</p>
          <p className="content">
            Bilkent University - Computer Technology and Information Systems
            (CTIS)
          </p>
        </li>
        <li className="about-section">
          <h2>Work Experience</h2>
          <p className="date">2022 - 2023</p>
          <p className="content">
            Consultant at 180Degrees Consulting, Bilkent University
          </p>
        </li>
        <li className="about-section">
          <h2>Community Involvement</h2>
          <p className="date">2017 - 2020</p>
          <p className="content">
            President of Kabataş Erkek High School Community Involvement
            Projects, leading 220 student volunteers across 13 different NGO
            projects.
          </p>
        </li>
        {/* Add more sections as needed */}
      </ul>
    </div>
  );
};

export default AboutPage;
