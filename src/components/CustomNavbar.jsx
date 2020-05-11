import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar sticky="top" variant="dark" expand="lg" default collapseOnSelect>
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
            {/* <Nav.Item>
              <Nav.Link href="/services">Services</Nav.Link>
            </Nav.Item> */}
            <Nav.Link>Facials</Nav.Link>
            <Nav.Link>Treatments</Nav.Link>
            <Nav.Link>Chemical Peels</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
