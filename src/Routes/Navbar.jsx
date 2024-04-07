import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <Link to="/">Login</Link>
        <Link to='/todo'>Todo</Link>
    </div>
  )
}

export default Navbar