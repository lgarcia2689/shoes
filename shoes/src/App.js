import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Sneakers from './components/Sneakers'

import './App.css'

const App = () => {
  return (
    <div>
      <div className = 'mainHeader'/>
      <Router>
      <nav>
        <div className='Banner'>
          <div className='navLinks'>
            <div className ='banner_left'>
              <button id = 'homeButton'><Link to="/">Home </Link></button>
            </div>
            <div className = 'title'>
              <h1>HIGH TOPS</h1>
            </div>
            <div className='banner_right'>
              <button id = 'aboutButton'><Link to="/About">About</Link></button>
              <button id = 'SneakersButton'><Link to="/Sneakers">Sneakers</Link></button>
            </div>

          </div>
        </div>
      </nav>

        <Switch>
          <Route path="/Sneakers">
            <Sneakers/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
};
export default App;