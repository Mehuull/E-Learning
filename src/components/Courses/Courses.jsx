import React from "react";
import "./Courses.css";
import { GrDocument } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import coursesData from "../../Data/courseData.json";

export function Courses() {
  return (
    <div className="courses">
      <h1 className="styled-header">Popular Courses<span className="h1-line"></span></h1>
      <div className="courses-wrapper">
        {coursesData.map((course, index) => (
          <div className="course-card2" key={index}>
            <div className="courseimg">
              <img src={course.courseimg} alt="" />
            </div>
            <div className="course-card-content">
              <div className="course-category">
                <h1>{course.Category}</h1>
                <span>popular</span>
              </div>
              <div className="course-description">
                <p>{course.description} </p>
              </div>
              <div className="user-info">
                <img src={course.userdp} alt="" />
                <div className="sub-user-info"><h4>{course.username}</h4><span>{course.userposition}</span></div>
              </div>
              <div className="course-info-counts">
                <span>
                  <GrDocument />{course.lessons}
                </span>{" "}
                <span>
                  <LuUsers />{course.students}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-effect">Browse All Courses</button>
    </div>
  );
}

export default Courses;
