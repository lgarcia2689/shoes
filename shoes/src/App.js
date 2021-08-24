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
              <Link to="/">Home </Link>
              
            </div>
            <div className = 'title'>
              <a href = "/">
                <h1>HIGH TOPS</h1>
              </a>
            </div>
            <div className='banner_right'>
              <div className='ab'>
                <Link to="/About" >About</Link>
              </div>
              <div className='sn'>
                <Link to="/Sneakers">Sneakers</Link>
              </div>
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