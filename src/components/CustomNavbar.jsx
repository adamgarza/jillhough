import React, { Component } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Image, Container } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar sticky="top" variant="dark" expand="sm" default collapseOnSelect>
        <Navbar.Brand href="/" className="brand">
          <span class="logo">
            <a href="/">
              <Image
                src="/assets/img/jillhoughlogo.svg"
                width="275em"
                className="d-inline-block align-top"
                alt="Jill Hough logo"
              />
            </a>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="incative">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Link href="/#facials">Facials</Nav.Link>
            <Nav.Link href="/#treatments">Treatments</Nav.Link>
            <Nav.Link href="/#peels">Chemical Peels</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
