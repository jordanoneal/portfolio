import React from "react";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import Message from "./components/Message/Message";
import About from "./pages/About/About";
import Fade from "react-reveal/Fade";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

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
      <Projects />
    </div>
  );
}

export default App;
