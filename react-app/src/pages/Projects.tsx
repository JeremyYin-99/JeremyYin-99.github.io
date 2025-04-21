import React from "react";
import "./styles.css"; // Import stylesheet

function ProjectCard(
  projectTitle: string,
  projectDescription: string,
  projectLink?: string
) {
  return (
    <li className="left-border">
      <div>
        <h3>
          <strong>{projectTitle}</strong>
        </h3>
        <p>{projectDescription}</p>
      </div>
      {(() => {
        if (projectLink == null) {
          return <p></p>;
        } else {
          return (
            <a
              href={projectLink as string}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h4>
                <em>Project link</em>
              </h4>
            </a>
          );
        }
      })()}
    </li>
  );
}

const ProjectPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="Spacer"></div>
      <h2>Personal Projects</h2>
      <ul>
        {ProjectCard(
          "My Personal Website",
          "This has been a multi-year endevor that started in 2018. I was originally inspired by web design and wanted to learn how to create my own website. I started with a simple HTML and CSS website and have since expanded it to include React and TypeScript. My first version used GitHub Pages, and showed me how important having assets and images were for a website. This led me though a journey learning blender and other design tools. I have since explored website hosting and deployment and have learned how to use React and TypeScript to create a more scalable/object-oriented website.",
          "https://github.com/JeremyYin-99/JeremyYin-99.github.io"
        )}
        <div className="Spacer"></div>
        {ProjectCard(
          "Reinforcement Learning Agent for Settlers of Catan",
          "This project started as a final project for my Advanced Topics in Machine Learning and Game Theory class taught by Professor Fei Fang. The inspiration for this project came from my disdain for Settlers of Catan and my interest in learning about Proximal Policy Optimization. OpenAI's OpenAI Five project was also a big inspiration for this project. The project was a great learning experience in learning about reinforcement learning and how to apply it to games. The project was also a great learning experience in learning about how to use the OpenAI Gym and how to create a custom environment for a game. The initial version is built from catanatron, however, I am in the process of creating a custom environment with more functionality for the game.",
          "https://github.com/JeremyYin-99/Catan.git"
        )}
        <div className="Spacer"></div>
        {ProjectCard(
          "Real-time Pittsburgh Bus Mapping and Tracking",
          "This was my very first project upon arriving at CMU. I really wanted to get to know Pittsburgh's public transportation system and to learn how to use APIs. I was inspired by the fact that Pittsburgh's public transportation system was complicated yet essential component of the student experience. I wanted to see if I could make a real-time bus tracking system that would help people navigate the city.",
          "https://github.com/JeremyYin-99/PittsburghMapping.git"
        )}
      </ul>
    </div>
  );
};

export default ProjectPage;
