import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Menu from "./Components/Menu";
import Chef from './Components/Chef';
import Awards from './Components/Awards';
import Video from './Components/Video';
import Gallery from './Components/Gallery';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Menu/>
      <Chef/>
      <Video/>
      <Awards/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
