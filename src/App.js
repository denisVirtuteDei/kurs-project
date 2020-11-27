import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Home } from './Components/Home';
import { Users } from './Components/Users';
import { About } from './Components/About';
import { Cabinet } from "./Cabinet";
import { FilingApp } from "./Trash/FilingApp";
import { FilingDec } from "./Trash/FilingDec";
import { AddAplication } from "./Trash/AddAplication";

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
          <Route exact path="/filingdec" component={FilingDec} />
          <Route exact path="/addaplication" component={AddAplication} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
