import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";
import { Cabinet } from "./Cabinet";
import { FilingApp } from "./Trash/FilingApp";

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cabinet" component={Cabinet} />
          <Route exact path="/filingapp" component={FilingApp} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
