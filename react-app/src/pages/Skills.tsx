import React from "react";
import "./styles.css"; // Import stylesheet

const SkillsSection: React.FC = () => {
  return (
    <>
      <h2 className="Skills-Title">Skills</h2>
      <div className="Skills-Banner">
        <div className="Skills-Card">
          <h3>Engineering</h3>
          <ul>
            <li>Autodesk Inventor</li>
            <li>Autodesk Revit</li>
            <li>Autodesk Fusion 360</li>
            <li>Sketchup</li>
            <li>SAP 2000</li>
          </ul>
        </div>
        <div className="Skills-Card">
          <h3>Data Analytics</h3>
          <ul>
            <li>Python</li>
            <li>Matplotlib</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>SciPy</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="Skills-Card">
          <h3>Machine Learning</h3>
          <ul>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>Scikit-learn</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
          </ul>
        </div>
        <div className="Skills-Card">
          <h3>Design</h3>
          <ul>
            <li>LaTeX</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Blender</li>
          </ul>
        </div>
        <div className="Skills-Card">
          <h3>Other</h3>
          <ul>
            <li>Microsoft Office Suite</li>
            <li>Google Suite</li>
            <li>Chinese Mandarin</li>
            <li>Metal and Wood Shop Training</li>
          </ul>
        </div>
      </div>
      <div className="Spacer"></div>
    </>
  );
};

export default SkillsSection;
