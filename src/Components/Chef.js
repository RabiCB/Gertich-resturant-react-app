import React from "react";
import "./Chef.css";
const Chef = () => {
  return (
    <div id="chef" className="app-chef-section">
      <div className="app-chef-card">
        <div className="app-chef-image">
          <img
            src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/chef.png?raw=true"
            alt="chef"
          />
        </div>
        <div className="chef-words">
          <div className="chef-quote">
          <p>chef's words</p>
          <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/aff0f75a021baa635f3197d3428c859d6bad64e5/src/assets/spoon.svg" alt="spoon-image"/>
          </div>
          
          <h1>What We Believe In</h1>
          <p>
            <span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam venenatis aliquam feugiat. Fusce cursus eros sit amet
            tristique euismod. Quisque eu venenatis ligula.{" "}
          </p>
          <div>
            <p>Kevin Lu</p>
            <h6>Chef & Founder</h6>
          </div>
          <div className="chef-sign">
            <img
              src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/sign.png?raw=true"
              alt="sign"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
