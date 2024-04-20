import React from "react";
import "./styles.css"; // Import stylesheet

const email = "jeremyyin99@gmail.com";
const emailLink = `mailto:${email}`;

const ContactPage: React.FC = () => {
  return (
    <div className="contact-content">
      <hr />
      <h1 className="Contact-Title">Contact Me: </h1>
      <div className="Contact-Banner">
        <ul>
          <li>
            <a href="https://Jeremy-Yin.com">Jeremy-Yin.com</a>
          </li>
          <li>1(408)831-8072</li>
          <li>
            <a href={emailLink}>{email}</a>
          </li>
        </ul>
      </div>
      <div className="Spacer"></div>
    </div>
  );
};

export default ContactPage;
