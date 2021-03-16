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

class App extends React.Component {
  componentDidMount() {
    var scroll =
      window.requestAnimationFrame ||
      // IE Fallback
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    var elementsToShow = document.querySelectorAll(".show-on-scroll");
    console.log(elementsToShow);
    function loop() {
      Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });

      scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }
  // Detect request animation frame
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <div className="mask">
            <div className="article">
              <Article />
              <Testimonial />
            </div>
          </div>
          <div className="maskTwo">
            <div className="article">
              <ArticleTwo />
            </div>
          </div>
          <div className="mask">
            <div className="article">
              <ArticleThree />
            </div>
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
