import React from "react";
import "./styles.css";

const AboutSection: React.FC = () => {
  return (
    <>
      <h2>About Me</h2>
      <p className="About-Me-Content">
        <strong>
          I am an avid researcher interested in machine learning applications
          for infrastructure systems.
        </strong>
      </p>
      <p className="About-Me-Content">
        Having earned both a Bachelor's and Master's of Science in Civil and
        Environmental Engineering, I've dedicated years to exploring
        infrastructure design, construction, and management. My academic and
        research journey has left me with a deep appreciation for combining
        theoretical knowledge and practical application, driving my passion for
        exploring novel techniques to address real-world challenges.
      </p>
      <p className="About-Me-Content">
        Beyond the traditional realms of civil engineering, I am interested in
        the potential of machine learning and data science to transform
        problem-solving and decision-making processes within the built
        environment. I am passionate about engineering, creative design, and
        software development, whether they involve the physical construction and
        modeling or the development of algorithmic models and solutions.
      </p>
      <p className="About-Me-Content">
        I am always eager to engage with individuals who share similar interests
        and aspirations. I always love the opportunity to connect and discuss
        the latest advancements in AI-driven applications and theory. Please
        feel free to reach out via the email or text message provided below!
      </p>
    </>
  );
};
export default AboutSection;
