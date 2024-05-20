import React from "react";
import "./styles.css"; // Import stylesheet

const email = "jeremyyin99@gmail.com";
const emailLink = `mailto:${email}`;

const ContactPage: React.FC = () => {
  return (
    <div>
      <hr />
      <h2 className="Contact-Title">Contact Me: </h2>
      <ul className="Contact-List">
        <li>
          <div className="material-symbols-outlined">home</div>
          <a href="https://Jeremy-Yin.com">Jeremy-Yin.com</a>
        </li>
        <li>
          <span className="material-symbols-outlined">call</span>
          (408) 831-8072
        </li>
        <li>
          <div className="material-symbols-outlined">mail</div>
          <a href={emailLink}>{email}</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jeremy-yin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/jeremy-yin/
          </a>
        </li>
      </ul>
      <div className="Spacer"></div>
    </div>
  );
};

export default ContactPage;
