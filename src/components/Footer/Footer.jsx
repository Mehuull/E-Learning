import React from "react";
import "./Footer.css";
import gettheapp from "../../assets/gettheapp.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
      
        <div className="footer-logo-section">
          <FaGraduationCap style={{ color: "white", fontSize: "3rem" }} />
          <h2 style={{ color: "white" }}>EduCare</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odit? Nemo perferendis cupiditate itaque distinctio dolorem aliquam
            porro numquam adipisci, blanditiis in? Nisi, molestiae doloribus?
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

        {/* Menu Section */}
        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Teachers</li>
            <li>Zoom Meetings</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-courses">
          <h3>Courses</h3>
          <ul>
            <li>Business & Management</li>
            <li>Creative Arts & Media</li>
            <li>Healthcare & Medicine</li>
            <li>IT & Computer Science</li>
            <li>Math and Logic</li>
            <li>Sports & Fitness</li>
          </ul>
        </div>

        <div className="footer-apps">
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter for updates and offers:</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="app-links">
            <img src={gettheapp} alt="" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; 2024 EduCare. All Rights Reserved. Designed and Developed by{" "}
        <a
          href="https://linktr.ee/mehuul"
          target="_blank"
          rel="noopener noreferrer"
        >
          MEHᏬL
        </a>
      </div>
    </footer>
  );
};

export default Footer;
