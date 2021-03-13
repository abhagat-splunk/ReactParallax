import React from "react";
import classnames from "classnames";

class Article extends React.Component {
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
        <h1 className="headline slide-up">18 BILLION DATA POINTS</h1>
        <h3 className="body slide-up">Lorem ipsum dolor sit amet consectetur adipiscing.</h3>
        </div>
        
      </div>
    );
  }
}



export default Article;
