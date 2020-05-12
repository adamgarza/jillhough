import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/CustomNavbar";

import Home from "./components/Home";
import Footer from "./components/Footer";
{
  /*
import About from "./components/About";
import Contact from "./components/Contact";
import Safety from "./components/Safety";
import Services from "./components/Services";

*/
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          {/*
          <Route path="/services" component={Services} />
          <Route path="/safety" component={Safety} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
          */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
