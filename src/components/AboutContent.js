import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import mongoLogo from '../assets/mongo-logo.png';
import expressLogo from '../assets/express-logo.png';
import reactLogo from '../assets/react-logo.png';
import nodeLogo from '../assets/node-logo.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import muiLogo from '../assets/mui-logo.png';     // Add Material-UI logo
import reduxLogo from '../assets/redux-logo.png'; // Add React Redux logo

const AboutContent = () => {
  return (
    <div className="about-content">
      <h1>Who Am I?</h1>
      <p className="who-am-i">
        My name is Kumaresan, and I am transitioning into a MERN stack developer role.
        I am passionate about building full-stack web applications that are both dynamic
        and responsive. I have experience in HTML, CSS, and JavaScript, and I am excited
        to apply my skills in MongoDB, Express, React, Node.js, Material-UI, and React Redux
        to create powerful web applications.
      </p>
      <div className="tech-stack">
        <h2>Technical Stack</h2>
        <div className="logos">
          <div className="logo-item">
            <img src={htmlLogo} alt="HTML Logo" />
            <p>HTML</p>
          </div>
          <div className="logo-item">
            <img src={cssLogo} alt="CSS Logo" />
            <p>CSS</p>
          </div>
          <div className="logo-item">
            <img src={jsLogo} alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className="logo-item">
            <img src={reactLogo} alt="React Logo" />
            <p>React</p>
          </div>
          <div className="logo-item">
            <img src={nodeLogo} alt="Node.js Logo" />
            <p>Node.js</p>
          </div>
          <div className="logo-item">
            <img src={expressLogo} alt="Express Logo" />
            <p>Express</p>
          </div>
          <div className="logo-item">
            <img src={mongoLogo} alt="MongoDB Logo" />
            <p>MongoDB</p>
          </div>
          <div className="logo-item">
            <img src={muiLogo} alt="Material-UI Logo" />
            <p>Material-UI</p>
          </div>
          <div className="logo-item">
            <img src={reduxLogo} alt="React Redux Logo" />
            <p>React Redux</p>
          </div>
        </div>
      </div>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>
  );
};

export default AboutContent;

