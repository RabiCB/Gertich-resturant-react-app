import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="app-intro-section" id="home">
      <div className="app-intro-info">
        <div className="app-wrapper-text">
        <p>Chase the new flavour</p>
        <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="spoon"/>
        </div>
        
        <h1 className="app-intro-slogan">
          The Key To Fine
          <br /> Dining
        </h1>
        <p className="app-intro-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedS
          <br /> labore et dolore magna aliqua.
        </p>
        <button className="app-intro-btn">Explore More</button>
      </div>
      <div className="app-intro-image">
        <img
          src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/welcome.png?raw=true"
          alt="foodimage"
        />
      </div>
    </div>
  );
};

export default Intro;
