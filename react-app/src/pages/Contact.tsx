import React from "react";
import "./styles.css"; // Import stylesheet

const ContactPage: React.FC = () => {
  return (
    <div className="contact-content">
      <hr />
      <h1 className="Contact-Title">Contact Me: </h1>
      <div className="Contact-Banner">
        <ul>
          <li>Jeremy-Yin.com</li>
          <li>1(408)831-8072</li>
          <li>jeremyyin99@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
