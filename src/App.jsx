import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Facials from "./components/Facials";
import Treatments from "./components/Treatments";
import Peels from "./components/Peels";
import Footer from "./components/Footer";
{
  /*
import About from "./components/About";
import Contact from "./components/Contact";
*/
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/facials" component={Facials} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/peels" component={Peels} />
          {/*
          <Route path="/facials" component={Facials} />
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
