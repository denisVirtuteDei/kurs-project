import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Footer from './Components/NotAuthPages/Footer'
import Home from './Components/NotAuthPages/Home'
import About from './Components/NotAuthPages/About'
import NaviBar from './Components/NotAuthPages/Navibar'
import { Provider } from 'react-redux'
import store from './Redux/Stores/Store.js'
import UserCabinet from './Components/UserCabinet'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NaviBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/im/:priority' component={UserCabinet} />
          <Redirect from='*' to='/' />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
