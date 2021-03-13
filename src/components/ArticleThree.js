import React from "react";
import classnames from "classnames";

class ArticleThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <img
          className="hero--article__image object-cover w-full h-full"
          src="https://source.unsplash.com/random"
          alt="unsplash"
        /> */}
        <div className="slide-up">
        <h1 className="headline">THE SCIENCE OF SLEEP</h1>
        <h3 className="body">Lorem ipsum dolor sit amet consectetur adipiscing.</h3>
        </div>
        
      </div>
    );
  }
}

export default ArticleThree;
