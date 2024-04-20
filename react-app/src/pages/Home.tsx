import React, { useEffect, useState } from "react";
import "./styles.css"; // Import stylesheet
import img1 from "../assets/LabRoom.png";
import img2 from "../assets/DesignRoom.png";
import img3 from "../assets/ExploringRoom.png";

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Researcher", "Designer", "Explorer"]; // Define the texts to rotate
  const images = [img1, img2, img3];

  useEffect(() => {
    // Trigger fade-in effect when component mounts
    setIsVisible(true);

    // Rotate text every 2 seconds
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to update transform property
  const updateTransform = () => {
    const scrolled = window.scrollY;
    const homeContent = document.querySelector(".home-content") as HTMLElement;

    // Shift home-content to the left based on scroll position
    homeContent.style.transform = `translateX(${-scrolled * 25}px)`;
  };

  // Call updateTransform function once when component mounts
  useEffect(() => {
    updateTransform();
  }, []);

  return (
    <>
      <div className={`home-page ${isVisible ? "fade-in" : ""}`}>
        <div className="home-content">
          <div className="intro">Hey! My name is</div>
          <h1>Jeremy Yin</h1>
          <div className="intro">I am a</div>
          <h1 className="rotating-text">{texts[currentTextIndex]}</h1>
        </div>
        <div className="home-content-right">
          <img
            className="rotating-photo"
            src={images[currentTextIndex]}
            alt=""
          />
        </div>
      </div>
      <div className="page-content">
        <h1>About</h1>
        <p className="About-Me-Content">
          <strong>
            I am a researcher with an interest in machine learning amd anomaly
            detection.
          </strong>
        </p>
        <p className="About-Me-Content">
          After graduating with a Bachelor's and Master's of Science in Civil
          Environmental Engineering under my belt, I've spent years delving into
          the intricacies of infrastructure design, construction, and
          management. My academic journey has instilled in me a deep
          appreciation for the intersection of theory and practice, which fuels
          my enthusiasm for tackling real-world challenges.
        </p>
        <p className="About-Me-Content">
          Beyond the realms of traditional engineering, I harbor a fervent
          passion for machine learning and data science. My fascination with
          these fields stems from their potential to revolutionize how we
          approach problem-solving and decision-making in the built environment.
        </p>
        <p className="About-Me-Content">
          I thrive on the thrill of building things—whether it's physical
          structures or algorithmic models. From conceptualization to execution,
          I relish the opportunity to bring ideas to life and witness their
          tangible impact on the world around us.
        </p>
        <p className="About-Me-Content">
          Academic research has been a cornerstone of my journey, providing me
          with invaluable insights and opportunities for growth. Through
          rigorous experimentation and analysis, I've contributed to advancing
          knowledge in areas ranging from fault detection in structural systems
          to optimization and simulation techniques.
        </p>
        <p className="About-Me-Content">
          I'm always eager to connect with like-minded individuals and
          collaborators! Whether you're interested in discussing the latest
          advancements in AI-driven infrastructure or simply want to swap ideas
          over a virtual cup of coffee, I'd love to hear from you. Feel free to
          reach out via the email or text down below!
        </p>
      </div>
    </>
  );
};

export default HomePage;
