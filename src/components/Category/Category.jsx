import React from "react";
import "./Category.css";

const Category = () => {
  const courses = [
    { title: "Business & Management", description: "11 courses", icon: "💼" },
    { title: "Creative Arts & Media", description: "17 courses", icon: "🎨" },
    { title: "Healthcare & Medicine", description: "5 courses", icon: "🩺" },
    { title: "IT & Computer Science", description: "17 courses", icon: "💻" },
    { title: "Psychology & Mental Health", description: "13 courses", icon: "🧠" },
    { title: "Science & Technology", description: "23 courses", icon: "🔬" },
    { title: "Math and Logic", description: "31 courses", icon: "➕" },
    { title: "Language", description: "14 courses", icon: "🌍" },
    { title: "Writing", description: "6 courses", icon: "✍️" },
    { title: "Law", description: "25 courses", icon: "⚖️" },
    { title: "Culinary", description: "32 courses", icon: "🍳" },
    { title: "Sport & Fitness", description: "12 courses", icon: "🏋️" },
  ];

  return (
    <div className="main-category-container">
      <h2 className="styled-header">Browse course by category<span className="h1-line"></span></h2>
      <div className="course-grid-container">
      {courses.map((course, index) => (
        <a key={index} className="course-card">
          <div className="course-icon">{course.icon}</div>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
        </a>
      ))}
    </div>
    </div>
  );
};

export default Category;
