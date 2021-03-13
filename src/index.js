import React from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Article from "./components/Article.js";
import Testimonial from "./components/Testimonial-Slider.js";

import "./styles.css";
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <h1>Ankit's Parallax</h1>
        <Article/>
        <div className="py-40 lg:py-20" />
        <div className="py-40 lg:py-20" />
        <Testimonial />
        <div className="py-40" />
      </div>
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
