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
        <Row className="footer-top">
          <Col xs={12} sm={12} md={1} lg={1} />
          <Col xs={12} sm={12} md={2} lg={3}>
            <h6>Contact</h6>
            <hr />
            <p>
              219-741-8275
              <br />
              jill@jillhough.com
              <br />
              <a href="https://www.facebook.com/jill.hough.5" target="_blank">
                <Image
                  className="social-icons"
                  fluid
                  width="25"
                  height="25"
                  color="white"
                  src="/assets/img/facebook-6.svg"
                  atl="Facebook logo"
                />
              </a>
            </p>
          </Col>
          <Col xs={12} sm={12} md={1} lg={1} />
          <Col xs={12} sm={12} md={2} lg={3}>
            <h6>address</h6>
            <hr />
            <p>
              Salon Platinum
              <br />
              1000 Eagle Ridge Dr #C
              <br />
              Schererville, IN 46375
            </p>
          </Col>
          <Col xs={12} sm={12} md={1} lg={1} />
          <Col xs={12} sm={12} md={2} lg={3}>
            <h6>Hours</h6>
            <hr />
            <p>
              Tue. 2pm-8pm
              <br />
              Wed. 9am-3pm
              <br />
              Fri. 9am-4pm
              <br />
              Sat. pam-3pm
            </p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12} sm={12} md={6} lg={6}>
            {" "}
            <p>Jill Hough Skincare Copyright &copy; 2020 </p>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
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
