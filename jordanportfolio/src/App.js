import React from "react";
import logo from "./logo.svg";
// import './App.css';
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <Message />
    </div>
  );
}

export default App;
