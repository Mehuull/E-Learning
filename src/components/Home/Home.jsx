import React from "react";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
import "./Home.css";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.jpg";
import student3 from "../../assets/student3.png";
import square from "../../assets/square.png";
import rectangle from "../../assets/rectangle.png";
import sparkle from "../../assets/sparkle.png";
import jalebi from "../../assets/jalebi.png";
import doodles from "../../assets/doodles.png";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="headline">
          Knowledge is an <span className="highlight">investment </span>that
          will never lose
        </h1>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, reiciendis. Praesentium enim vitae, ex non cupiditate,
          delectus molestias magnam harum ut minima, cum sit nulla quidem
          doloribus eum.
        </p>

        <div className="search_wrap">
          <div className="search_box">
            <div className="input_container">
              <CiSearch className="search_icon" />
              <input
                type="text"
                className="input"
                placeholder="Search online course..."
              />
            </div>
            <div className="search-btn">
              <p>Search</p>
            </div>
          </div>
        </div>

        {/* Experience Figures */}
        <div className="figures">
          <div className="figure-item">
            <span className="figure-count">
              <NumberCounter end={20} start={0} delay={1} preFix="+" />
            </span>
            <span>Courses</span>
          </div>
          <div className="figure-item">
            <span className="figure-count">
              <NumberCounter end={500} start={2} delay={4} preFix="+" />
            </span>
            <span>Active Students</span>
          </div>
          <div className="figure-item">
            <span className="figure-count">
              <NumberCounter end={50} delay={1} preFix="+" />
            </span>
            <span>Professors</span>
          </div>
        </div>
        <img src={doodles} alt="" className="doodles" />
      </div>

      {/* Image Section */}
      <div className="circle-container">
        <motion.div
          className="main-circle"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={student1} alt="Main" className="main-image" />
        </motion.div>
        <motion.div
          className="sub-circle sub-circle1"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img src={student2} alt="Sub 1" className="sub-image" />
        </motion.div>
        <motion.div
          className="sub-circle sub-circle2"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={student3} alt="Sub 2" className="sub-image" />
        </motion.div>
        <img src={square} alt="" className="dotted-square" />
        <img src={sparkle} alt="" className="sparkle" />
        <img src={jalebi} alt="" className="jalebi" />
      </div>
    </div>
  );
};

export default Home;
