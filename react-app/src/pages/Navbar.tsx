import React from "react";
import { NavLink } from "react-router-dom"; // Import Link for routing
import "./styles.css"; // Import stylesheet
import resume from "../assets/Resume.pdf";

const Navbar: React.FC = () => {
  return (
    <div className="Nav-Container">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ResearchAndPublications">Research</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Teaching">Teaching</NavLink>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
