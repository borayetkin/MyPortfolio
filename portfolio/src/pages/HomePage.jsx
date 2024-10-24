import React from "react";
import "../styles/HomePage.css"; // Separate CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="homepage-main-content">
      <div className="homepage-profile-container">
        <img
          src="/path/to/your/image.jpg"
          alt="Your Name"
          className="homepage-profile-image"
        />
        <h1 className="homepage-name">Your Name</h1>
        <p className="homepage-subtitle">
          A React developer passionate about web development and building great
          user experiences.
        </p>
      </div>

      <ul className="homepage-links-list">
        <li className="homepage-links-list-item">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link-card"
          >
            <div className="homepage-link-icon">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </div>
            <div className="homepage-link-text">
              <h2>LinkedIn</h2>
              <p>Connect with me</p>
            </div>
          </a>
        </li>
        <li className="homepage-links-list-item">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link-card"
          >
            <div className="homepage-link-icon">
              <FontAwesomeIcon icon={faFile} size="3x" />
            </div>
            <div className="homepage-link-text">
              <h2>Resume</h2>
              <p>Download my resume</p>
            </div>
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default HomePage;
