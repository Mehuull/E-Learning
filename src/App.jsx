import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Category from "./components/Category/category";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Enroll from "./components/Enroll/Enroll";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-white text-dark">
      {/* Navbar with Smooth Scroll */}
      <Navbar />

      {/* Sections with respective IDs */}
      <section id="home" className="section">
        <Home />
      </section>
      <section className="section" id="features">
        <Features />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="category" className="category">
        <Category />
      </section>
      <section id="courses" className="section">
        <Courses />
      </section>
      <section id="Testimonial" className="section">
        <Testimonial />
      </section>
      <section id="Enroll" className="section">
        <Enroll />
      </section>
      <Footer />
    </div>
  );
}

export default App;
