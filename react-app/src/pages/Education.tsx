import React from "react";
import "./styles.css";
import CMU_Logo from "../assets/CMU_Logo.png";
import UIUC_Logo from "../assets/UIUC_Logo.png";

const EducationSection: React.FC = () => {
  return (
    <>
      <h2 className="Education-Title">Education</h2>
      <div className="Education-Banner">
        <div className="School-Card">
          <div className="School-Logo-Container">
            <img src={CMU_Logo} alt="" className="School-logo" />
          </div>
          <div className="School-Info">
            <p>Master of Science in Civil and Environmental Engineering</p>
            <p>Graduated December 2022</p>
          </div>
        </div>
        <div className="School-Card">
          <div className="School-Logo-Container">
            <img src={UIUC_Logo} alt="" className="School-logo" />
          </div>
          <div className="School-Info">
            <p>Bachelor of Science in Civil and Environmental Engineering</p>
            <p>Graduated May 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default EducationSection;
