
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
function Navbar() {
    const [togglemenu,settoggle]=useState(false)
  return (
    <nav className="app-navbar">
      <div className='app-logo'>
        <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/gericht.png" alt="logo"/>
      </div>
      <ul className={togglemenu?'app-small-screen-listitems':'app-list-items'}>
        <li><a onClick={()=>settoggle(false)} href="#home">Home</a></li>
        <li><a onClick={()=>settoggle(false)} href="#about">About</a></li>
        <li><a onClick={()=>settoggle(false)}  href="#menu">Menu</a></li>
        <li><a onClick={()=>settoggle(false)}  href="#chef">Chef</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="app-authentication">
        <a href="#">Log in/Register</a>
        <span></span>
        <a href="#">Book Table</a>
      </div>
      <div className="app-smallscreen-ham">
     <GiHamburgerMenu onClick={()=>settoggle(!togglemenu)} style={{color:"white"}}></GiHamburgerMenu>
     </div>
    </nav>
  );
}

export default Navbar;
