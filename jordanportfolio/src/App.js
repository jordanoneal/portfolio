import React from "react";
import logo from "./logo.svg";
// import './App.css';
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import Message from "./components/Message/Message";
import About from "./pages/About/About";
import Fade from "react-reveal/Fade";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <Message />
      <div>
        <Fade bottom>
          <About />
        </Fade>
      </div>
      <Skills />
    </div>
  );
}

export default App;
