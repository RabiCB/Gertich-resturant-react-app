import React from "react";
import "./Gallery.css";
import {Link} from 'react-router-dom'
const Gallery = () => {
  const Images=[
        {
            id:'1',
            img:'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery01.png?raw=true'
    
        },
        {
            id:'2',
            img:'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery02.png?raw=true'
    
        },
        {
            id:'3',
            img:'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery03.png?raw=true'
    
        },
        {
            id:'4',
            img:'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery04.png?raw=true'
    
        },
        
    ]

  return (
    <div id="gallery" className="app-gallery">
      <div className="app-gallery-title">
        <h1>Our Gallery</h1>
        <p>The art of fineness</p>
      </div>
      <div className="slide">
        {Images.map((I)=>{
            return <img key={I.id} src={I.img} alt="food"/>
        })}
        
      </div>
    </div>
  );
};

export default Gallery;
