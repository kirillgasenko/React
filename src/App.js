import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";

class App extends Component {
  render(){
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
