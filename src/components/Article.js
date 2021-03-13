import React from "react";
import classnames from "classnames";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
    console.log(elementsToShow);
    function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
    element.classList.add('is-visible');
    } else {
    element.classList.remove('is-visible');
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
      (rect.top <= 0
      && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
  }
  render() {
    
    return (
        <div className="slide-up">
        <h1 className="headline inline-text-scroll show-on-scroll">18 BILLION DATA POINTS</h1>
        <h3 className="body inline-text-scroll show-on-scroll">Lorem ipsum dolor sit amet consectetur adipiscing.</h3>
        </div>
    );
  }
}



export default Article;
