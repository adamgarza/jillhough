import React, { Component } from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <Container
        className="footer"
        sticky="bottom"
        bg="dark"
        variant="dark"
        expand="lg"
        fluid
      >
        <Row className="justify-content-md-center footer-top">
          <Col xs={12} sm={12} md={3} lg={3}>
            <h6>Jill Hough skincare</h6>
            <hr />
            <p>
              Copyright &copy; 2020
              <br />
              All Rights Reserved
            </p>
          </Col>

          <Col xs={12} sm={12} md={1} lg={1} />

          <Col xs={12} sm={12} md={3} lg={3}>
            <h6>address</h6>
            <hr />
            <p>
              xxxx Eagle Ridge Dr
              <br />
              Schererville, IN 46375
            </p>
          </Col>

          <Col xs={12} sm={12} md={1} lg={1} />

          <Col xs={12} sm={12} md={3} lg={3}>
            <h6>Contact</h6>
            <hr />
            <p>
              219-xxx-xxxx
              <br />
              jill@jillhough.com
            </p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12} sm={12} md={12} lg={12}>
            {" "}
            <p>
              Web Development:{" "}
              <a href="https://thecreativefew.com" target="_blank">
                <Image
                  fluid
                  width="30"
                  height="30"
                  src="/assets/img/creative_few_logo.svg"
                  atl="The Creative Few logo"
                />
                The Creative Few
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
