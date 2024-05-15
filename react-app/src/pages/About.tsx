import React from "react";
import "./styles.css";

const AboutSection: React.FC = () => {
  return (
    <>
      <h2>About Me</h2>
      <p className="About-Me-Content">
        <strong>
          I am a researcher with an interest in machine learning amd anomaly
          detection.
        </strong>
      </p>
      <p className="About-Me-Content">
        Having earned both a Bachelor's and Master's of Science in Civil
        Environmental Engineering, I've dedicated years to exploring
        infrastructure design, construction, and management. My academic journey
        has left me with a deep appreciation for combining theoretical knowledge
        and practical application, driving my passion for utilizing novel
        techniques to address real-world challenges.
      </p>
      <p className="About-Me-Content">
        Beyond the traditional realms of civil engineering, I am interested in
        the potential of machine learning and data science to transform
        problem-solving and decision-making processes within the built
        environment. I am passionate about engineering, creativity design, and
        software development, whether they involve the physical construction and
        modeling or the development of algorithmic models and solutions.
      </p>
      <p className="About-Me-Content">
        Academic research has played a pivotal role in my professional
        development, offering invaluable insights and fostering growth. Through
        rigorous experimentation and analysis in my reseach and interactions
        with my peers, I have made contributions to advancing knowledge in areas
        ranging from fault detection in structural systems to the application of
        optimization and simulation techniques.
      </p>
      <p className="About-Me-Content">
        I am always eager to engage with individuals who share similar interests
        and aspirations. I always welcome the opportunity to connect and discuss
        the latest advancements in AI-driven applications and theory. Please
        feel free to reach out via the email or text message provided below — I
        would love to sit down and chat!
      </p>
    </>
  );
};
export default AboutSection;
