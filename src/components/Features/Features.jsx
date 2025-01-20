import React from "react";
import "./Features.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

const Features = () => {
  return (
    <div className="features">
      <h1 className="styled-header">
        Fecility We Provide
        <span className="h1-line"></span>
      </h1>

      <div class="featured-card">
        <div class="div1 fr-box">
          <div className="fr-card-content">
            <img src={icon1} alt="" />
            <h2>Study Anywhere</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo perferendis cupiditate deleniti eveniet dignissimos?
            </p>
          </div>
        </div>

        <div class="div2 fr-box">
          <div className="fr-card-content">
            <img src={icon2} alt="" />
            <h2>One to One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo perferendis cupiditate deleniti eveniet dignissimos?
            </p>
          </div>
        </div>

        <div class="div3 fr-box">
        <div className="fr-card-content">
          <img src={icon3} alt="" />
          <h2>Zoom Meetings</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            illo perferendis cupiditate deleniti eveniet dignissimos?
          </p>
        </div>
        </div>

        <div class="div4 fr-box">
        <div className="fr-card-content">
            <img src={icon4} alt="" />
            <h2>One Time</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo perferendis cupiditate deleniti eveniet dignissimos?
            </p>
          </div>
        </div>

        <div class="div5 fr-box">
          <div className="fr-card-content">
            <img src={icon5} alt="" />
            <h2>Remote Learning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo perferendis cupiditate deleniti eveniet dignissimos?
            </p>
          </div>
        </div>
        <div class="div6 fr-box">
        <div className="fr-card-content">
            <img src={icon6} alt="" />
            <h2>Self Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo perferendis cupiditate deleniti eveniet dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
