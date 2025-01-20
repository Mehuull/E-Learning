import React, { useState } from "react";
import "./Testimonial.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../../Data/Testimonials.json";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = Testimonials.length;

  // Animation variants
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setSelected(selected === 0 ? tLength - 1 : selected - 1);
  };

  const handleNext = () => {
    setDirection(1);
    setSelected(selected === tLength - 1 ? 0 : selected + 1);
  };

  return (
    <div className="testimonial">
      <div className="testimonial-wrapper">
        <div className="testimonial-heading">
          <span>Testimonials</span>
          <h1>What our students say...</h1>
        </div>
        <div className="testimonial-item">
          <div className="student-profile-img">
            <AnimatePresence custom={direction}>
              <motion.img
                key={selected} 
                src={Testimonials[selected].profileimg}
                alt={`${Testimonials[selected].studentname}'s profile`}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          
          <div className="student-message-container">
            <AnimatePresence custom={direction}>
              <motion.div
                key={selected} 
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.5 }}
              >
                <h1>Success stories of our students</h1>
                <p>{Testimonials[selected].message}</p>
                <span>{Testimonials[selected].studentname}</span>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="navigate-arrow">
              <GrLinkPrevious onClick={handlePrev} />
              <GrLinkNext onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
