import React, { Component } from 'react';

import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import Footer from "./components/Footer.js";

import './App.css';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return(
      <>
        <Navbar />
        <Dashboard />
        <Footer />
      </>
    )
  }
}

export default App;
