import React, { Component } from "react";
import Carousel from "./Carousel";
// import Cards from "./Cards";
import Facials from "./Facials";
import Treatments from "./Treatments";
import Peels from "./Peels";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        {/* <Cards /> */}
        <Facials />
        <Treatments />
        <Peels />
      </div>
    );
  }
}

export default Home;
