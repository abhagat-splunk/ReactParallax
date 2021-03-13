import React from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Article from "./components/Article.js";
import ArticleTwo from "./components/ArticleTwo.js";
import ArticleThree from "./components/ArticleThree.js";
import Testimonial from "./components/Testimonial-Slider.js";


/*
requestAnimationFrame as well as Intersection Observer


*/


import "./styles.css";
function App() {
  return (
    <ParallaxProvider>

      <div className="App">
        <div className="mask">
          <div className="article">
            <Article/>
          </div>
        </div>
        <div className="maskTwo">
          <div className="article">
            <ArticleTwo/>
          </div>
        </div>
        <div className="mask">
          <div className="article">
            <ArticleThree/>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
