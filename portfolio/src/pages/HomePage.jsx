// HomePage.jsx
import React from "react";
import "../styles/HomePage.css"; // Importing CSS
import profileImage from "../assets/images/oyt.png"; // Importing image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importing the envelope icon from solid icons
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import from brands icons collection
import homeData from "../data/homeData.json"; // Importing JSON data

const HomePage = () => {
  const iconMapping = {
    faLinkedin: faLinkedin,
    faFile: faFile,
    faEnvelope: faEnvelope, // Add the envelope icon to the mapping
  };

  return (
    <div className="homepage-main-content">
      <div className="homepage-profile-container">
        <img
          src={profileImage}
          alt="Profile"
          className="homepage-profile-image"
        />
        <h1 className="homepage-name">{homeData.name}</h1>
        <p className="homepage-subtitle">{homeData.subtitle}</p>
      </div>

      <ul className="homepage-links-list">
        {homeData.links.map((link) => (
          <li key={link.id} className="homepage-links-list-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="homepage-link-card"
            >
              <div className="homepage-link-icon">
                <FontAwesomeIcon icon={iconMapping[link.icon]} size="3x" />
              </div>
              <div className="homepage-link-text">
                <h2>{link.title}</h2>
                <p>{link.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
