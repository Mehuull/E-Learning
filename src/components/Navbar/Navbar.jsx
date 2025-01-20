import React, { useState } from "react";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa6";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <FaGraduationCap className="navbar-icon" />
          <h2 className="navbar-title">EduCare</h2>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RxCross1 className="navbar-hamburger-icon" />
          ) : (
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          {["home", "about", "category", "courses"].map((item) => (
            <li key={item} className="navbar-item">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="navbar-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li className="navbar-item">
            <a href="#" className="btn btn-effect">
              Login / Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
