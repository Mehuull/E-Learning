import React from "react";
import "./About.css";
import { GoVerified } from "react-icons/go";
import aboutimg from "../../assets/aboutimage.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about-content">
          <div className="about-content1">
            <span>About Us</span>
            <h2>We Offering Coaching by Skilled Profesors</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam atque quod ratione, ducimus velit qui quis autem facere
              praesentium asperiores.
            </p>
          </div>
          <div className="about-content2">
            <div className="about-points">
              <div className="icon"><GoVerified /></div>
              <div className="about-point"><h1>Exclusive Coach</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a esse officia.</p></div>
            </div>
            <div className="about-points">
              <div className="icon"><GoVerified /></div>
              <div className="about-point"><h1>Master Certified</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a esse officia.</p></div>
            </div>
            <div className="about-points">
              <div className="icon"><GoVerified /></div>
              <div className="about-point"><h1>Creative Minds</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a esse officia.</p></div>
            </div>
            <div className="about-points">
              <div className="icon"><GoVerified /></div>
              <div className="about-point"><h1>Vedio Tutorials</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius a esse officia.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
