import React, { useState } from "react";
import { wine } from "./Data";
import "./Menu.css";

const Menu = () => {
  const [items,setItems]=useState(wine)
  return (
    <div className="app-menu" id="menu">
      <div className="menu-title">
        <p>Menu That fits you palce</p>
        <h1>Today's Special</h1>

      </div>
      <div className="items-cards">
        {
            wine.map((x)=>{
                return<div className="card-wine">
                    <h6>{x.name}</h6>
                    <p>{x.about}</p>
                    <p>{x.price}</p>
                    
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Menu;
