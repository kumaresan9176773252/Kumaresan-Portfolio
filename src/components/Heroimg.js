import "./HeroimgStyles.css"

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import CV from "../assets/S Kumaresan.pdf";
const Heroimg = () => {
  return (
    <div className="hero">

        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img"/>
        </div>
      <div className="content">
        <p>HI, I'M KUMARESAN</p>
        <h1>Job Seeker.</h1>
        <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
     <a href={CV} download className="btn btn-dark">Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
