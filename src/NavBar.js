import React from 'react'
import brentLaptop from './brentLaptop.png'
import './NavBar.css'
const NavBar = () => {
  return (
    < div className='NavBar'>
      <div className='nav-left'>
        <img className='laptop-logo' alt='laptop-logo' src={brentLaptop} />
      </div>
      <div className='nav-right'>
        <ul>
          <li>Contact</li>
          <li>Social</li>
          <li>Hobbies</li>
        </ul>
      </div>
    </div>
  )
}
export default NavBar