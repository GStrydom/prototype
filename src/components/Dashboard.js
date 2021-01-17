import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./Login.js";
import Home from "./Home.js";


class Dashboard extends Component {
  render() {
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/services">
              
            </Route>
            <Route path="/contact">
              
            </Route>
            <Route path="/profile">
              
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default Dashboard;
