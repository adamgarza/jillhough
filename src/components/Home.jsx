import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Carousel from "./Carousel";
// import Cards from "./Cards";
import Facials from "./Facials";
import Treatments from "./Treatments";
import Peels from "./Peels";
import Main from "./Main";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Main />
      </div>
    );
  }
}

export default Home;
