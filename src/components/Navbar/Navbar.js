import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav position="static" className="nav-wrapper orange darken-3">
      <div className="container">
        <Link className="brand-logo center" to="/"> Stocks </Link>
        <ul className="left">
          <li ><NavLink exact to="/">Home</NavLink></li>
          <li ><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <ul className="right">
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar