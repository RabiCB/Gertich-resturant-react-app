import React, { useState } from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  const [input, setInput] = useState("");
  function backtop(){
   document.body.scrollTop=0;
   document.documentElement.scrollTop = 0;
  }
  return (
    <div className="app-footer">
      <div className="app-footer-title">
        <h1>Book Tables</h1>
        <p>The Showcase of Hospitality & Care</p>
      </div>
      <form
        className="input-form"
        action="https://getform.io/f/a71b8014-d583-4373-b30e-0808ad0a6734"
        method="POST"
      >
        <input
          type="text"
          name="name-of-person"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your name"
        />
        no of people :
        <select name="no-of-peoples">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="Eight">8</option>
          <option value="Nine">9</option>
          <option value="ten">10</option>
          <option value="Party">Party</option>
        </select>
        no of table :
        <select name="no-of-tables">
          <option value="one-table">1-table</option>
          <option value="2- tables">2-tables</option>
          <option value="3- tables">3-tables</option>
          <option value="4- tables">4-tables</option>
          <option value="whole venue">whole-venue</option>
        </select>
        Type of food :
        <select name="type-of-food">
          <option value="asian">Asian</option>
          <option value="western">Western</option>
          <option value="Euripean">European</option>
        </select>
        Type of liqour :
        <select name="type-of-drink">
          <option value="wine">Wine</option>
          <option value="whiskey">Whiskey</option>
          <option value="Rum">Rum</option>
          <option value="taqueela">Taqueelas</option>
        </select>
        <button type="submit">submit</button>
      </form>
     <div>
      <div id="footer" className="footer-end">
        
        <div className="footer-first">
          <h4>Connect With Us</h4>
          <form className="footer-form">
          <input type="text" placeholder="send message to us" />
          <button type="submit">Send</button>
          </form>
        </div>

        <div className="social-media">
          <h4>Follow us on social-media</h4>
          <div className="social-apps">
            <a href="#insta">
              <span>
                <AiFillInstagram color="#F56040" />
              </span>
            </a>
            <a href="#twitter"><span>
              <AiFillTwitterCircle color="#1da1f2" />
            </span>
            </a>
            <a href="#facebook"><span>
              <BsFacebook color="#1877F2" />
            </span>
            </a>
          </div>
        </div>

        <ul className="items">
          <a href="#about"><li>About</li></a>
          <a href="#gallery"><li>Gallery</li></a>
          <a href="#footer"><li>Contact us</li></a>
          
        </ul>
      </div>
      </div>

    <div onClick={backtop} className="Back-top">Back to top</div>
    </div>
  );
};

export default Footer;
