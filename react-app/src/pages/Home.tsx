import React, { useEffect, useState } from "react";
import "./styles.css"; // Import stylesheet
import img1 from "../assets/LabRoom.jpg";
import img2 from "../assets/DesignRoom.jpg";
import img3 from "../assets/ExploringRoom.jpg";
import AboutSection from "./About";
import EducationSection from "./Education";
import SkillsSection from "./Skills";

const HomePage: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Researcher", "Designer", "Explorer"]; // Define the texts to rotate
  const images = [img1, img2, img3];

  useEffect(() => {
    // Rotate text every 2 seconds
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-content">
      <div className="home-page">
        {/* // className={`home-page ${isVisible ? "fade-in" : ""}`}> */}
        <div className="home-content">
          <h2 className="no-bottom-margin">
            Hey! My name is <strong>Jeremy</strong>
          </h2>
          <h2 className="no-bottom-margin">and I am a:</h2>
          <h1 className="no-bottom-margin rotating-text">
            <strong>{texts[currentTextIndex]}</strong>
          </h1>
        </div>
        <div className="home-content">
          <img
            className="rotating-photo"
            src={images[currentTextIndex]}
            alt=""
          />
        </div>
      </div>
      <AboutSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
