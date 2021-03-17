import React from "react";
import classnames from "classnames";
import Arrow from "./Arrow.js";

class ArticleThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slide-up">
        <h1 className="headline inline-text-scroll show-on-scroll">
          THE SCIENCE OF SLEEP
        </h1>
        <h3 className="body inline-text-scroll show-on-scroll">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </h3>
        <Arrow />
      </div>
    );
  }
}

export default ArticleThree;
