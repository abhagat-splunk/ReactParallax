import React, { Component, createRef } from "react";
import Slider from "react-slick";
import Slide from "./Slide.js";

export default class TestimonialSlider extends Component {
  constructor(props) {
    super(props);

    this.nav1 = createRef();
    this.nav2 = createRef();
  }

  render() {
    const settings = {
      infinite: false,
      centerMode: true,
      variableWidth: true,
      speed: 500,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false,
          },
        },
      ],
    };

    return (
      <div className="flex justify-end lg:justify-end container mx-auto">
        <div className="testimonial-slider relative">
          <Slider
            className="testimonial-slider__slides"
            {...settings}
            ref={this.nav1}
            slidesToShow={1}
            swipeToSlide={true}
          >
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
          </Slider>
        </div>
      </div>
    );
  }
}
