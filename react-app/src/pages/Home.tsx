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
        <h1>About Me</h1>
        <p className="About-Me-Content">
          <strong>
            I am a researcher with an interest in machine learning amd anomaly
            detection.
          </strong>
        </p>
        <p className="About-Me-Content">
          Having earned both a Bachelor's and Master's of Science in Civil
          Environmental Engineering, I've dedicated years to exploring the
          intricacies of infrastructure design, construction, and management. My
          academic journey has left me with a profound appreciation for the
          convergence of theoretical knowledge and practical application,
          driving my passion for addressing real-world challenges.
        </p>
        <p className="About-Me-Content">
          Beyond the traditional realms of engineering, I am deeply fascinated
          by the potential of machine learning and data science to transform
          problem-solving and decision-making processes within the built
          environment. I find great satisfaction in the engineering, creativity,
          and design processes, whether they involve the physical construction
          and modeling or the development of algorithmic models.
        </p>
        <p className="About-Me-Content">
          Academic research has played a pivotal role in my professional
          development, offering invaluable insights and fostering growth.
          Through rigorous experimentation, analysis, and interactions with my
          peers, I have made contributions to advancing knowledge in areas
          ranging from fault detection in structural systems to the application
          of optimization and simulation techniques.
        </p>
        <p className="About-Me-Content">
          I am always eager to engage with individuals who share similar
          interests and aspirations. I always welcome the opportunity to connect
          and discuss the latest advancements in AI-driven applications and
          theory. Please feel free to reach out via the email or text message
          provided below—I look forward to further dialogue and evolution.
        </p>
      </div>
    </>
  );
};

export default HomePage;
