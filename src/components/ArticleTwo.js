import React from "react";
import classnames from "classnames";

class ArticleTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slide-up">
        <h1 id="one" className="headline inline-text-scroll show-on-scroll">
          1 BILLION SLEEP SESSIONS
        </h1>
        <h3 id="one" className="body inline-text-scroll show-on-scroll">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </h3>
      </div>
    );
  }
}

export default ArticleTwo;
