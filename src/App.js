import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Home } from './Components/Home';
import { Users } from './Components/Users';
import { About } from './Components/About';
import { Cabinet } from "./Components/Cabinet";
import { FilingApp } from "./Components/FilingApp";
import { FilingDec } from "./Components/FilingDec";
import { Provider } from "react-redux";
import { store } from './Redux/Stores/Store.js'
import { TaxpayersMaket } from "./Components/TaxpayersMaket";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" render={Users} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cabinet" component={Cabinet} />
          <Route path="/taxpayers" component={TaxpayersMaket} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
