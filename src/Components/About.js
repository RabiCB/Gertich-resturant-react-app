import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className="app-about-section" id="about">
     <div className="about-us">
        <div className='g-image'>
            <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/G.png?raw=true" alt="g-image"/>
        </div>
        <div className='app-about-us'>
            <h1>About Us</h1>
            <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="spoon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#"><button className='know-more'>Know More</button></a>
        </div>
        <div className='app-our-history'>
            <h1>Our History</h1>
            <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="spoon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#"><button className='know-more'>Know More</button></a>
        </div>
        <div className='knife-image'>
            <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/knife.png?raw=true" alt="knife"/>
        </div>
      </div>

     </div>

  )
}

export default About