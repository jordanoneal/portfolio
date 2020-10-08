import React from "react";
import logo from "./logo.svg";
// import './App.css';
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import Message from "./components/Message/Message";
import About from "./pages/About/About";
import Fade from "react-reveal/Fade";

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
    </div>
  );
}

export default App;
