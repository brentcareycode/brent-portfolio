import React from 'react'
import brentLaptop from './brentLaptop.png'
import './NavBar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Social from './Social';
import Main from './Main';
const NavBar = () => {
  return (
    <Router>
    <div className='NavBar'>
      <div className='nav-left'>
        <img className='laptop-logo' alt='laptop-logo' src={brentLaptop} />
        <h2 id='nav-header'>BCLabs</h2>
      </div>
      <div className='nav-right'>
        <ul>
        <li>
        <NavLink activeClassName='is-active' className='nav-link' exact to='/'>Home</NavLink>
        </li>
          <li>
          <NavLink activeClassName='is-active' className='nav-link' exact to='/social'>Social</NavLink>
          </li>
          <li>Contact</li>
          <li>Hobbies</li>
        </ul>
      </div>
    </div>
    <Switch>
      <Route path='/social'>
        <Social/>
      </Route>
      <Route path='/'>
        <Main/>
      </Route>
    </Switch>
    </Router>
    
  )
}
export default NavBar