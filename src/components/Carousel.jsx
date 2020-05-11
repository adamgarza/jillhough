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
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel2.jpg?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel4.jpg?text=First slide&bg=373940"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/assets/img/carousel3.jpg?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
