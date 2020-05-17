import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

export default class Caroucel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel1.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel2.jpg?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel4.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel3.jpg?text=Third slide&bg=20232a"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
