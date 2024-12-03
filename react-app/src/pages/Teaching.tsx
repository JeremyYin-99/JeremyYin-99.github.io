import React from "react";
import "./styles.css"; // Import stylesheet
import { TeachingLayout } from "../utils/Functions";

const TeachingPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="Spacer"></div>
      <h2>Teaching Experiences</h2>
      <ul>
        {TeachingLayout(
          "CMU",
          "12-301",
          "CEE Projects: Integrating the Built, Natural and Information Environments",
          "https://www.cmu.edu/cee/admissions/cee-courses/12-301.html",
          "Professor Joe Moore",
          "https://www.cmu.edu/cee/people/faculty/moore.html",
          "Teaching Assistant",
          "Fall 2022",
          "Civil and environmental engineers work at the interface of multiple disciplines, understanding and applying principles to evaluate and create. This course extends design skills from 12-100 and 12-200 to hands-on experiences with more integrated, interdisciplinary problem solving. Students explore the roles of diverse stakeholders, community engagement, and sustainability goals in CEE projects. Students integrate construction/structures, sensing, and sustainability through team-based projects, and apply communication, computation, and project management skills. Students develop an understanding of the professional, ethical, social, and economic aspects of engineering projects. The course combines formal instruction, field trips, teamwork, role-playing, and engagement with practicing experts involved with CEE projects.",
          "Professor Don Coffelt",
          "https://www.cmu.edu/cee/people/faculty/coffelt.html"
        )}
        <hr />
        {TeachingLayout(
          `CMU`,
          `12-770`,
          `Special Topics: Autonomous Sustainable Buildings: From Theory to Practice`,
          `https://www.cmu.edu/cee/admissions/cee-courses/12-770.html`,
          `Professor Mario Berges`,
          `https://www.cmu.edu/cee/people/faculty/berges.html`,
          `Teaching Assistant`,
          `Spring 2023`,
          "With a focus on real-world deployments, case studies and group projects, this course will cover the theory and emerging practice of retrofitting existing buildings with hardware and software to significantly increase their autonomy and overall sustainability. The focus will be primarily on the operational stage of the life-cycle of buildings, and particularly on HVAC, electrical and water systems within them."
        )}
        <hr />
        {TeachingLayout(
          `CMU`,
          `12-760`,
          `Fundamentals of Programming for Engineering Systems`,
          `https://www.cmu.edu/cee/admissions/cee-courses/12-760.html`,
          `Professor Susan Finger`,
          `https://www.cmu.edu/cee/people/faculty/finger.html`,
          `Teaching Assistant`,
          `Fall 2023`,
          "This course introduces advanced programming concepts to students from civil and environmental engineering. The goal of the course is to engage students in identifying engineering problems suitable for computational approaches and to enable them to effectively design and implement software solutions that leverage the work of professional programmers and other researchers. The course covers best practices in databases, object-oriented programming, knowledge-based systems, constrained-based reasoning, Information lifecycle, information visualization, and data analytics. The course focuses on Python but also covers Matlab. Students in this course will work on a sequence of projects culminating in a final term project. Students are required to know already a modern programming language (e.g., Python, Java, C++, etc)."
        )}
      </ul>
    </div>
  );
};

export default TeachingPage;
