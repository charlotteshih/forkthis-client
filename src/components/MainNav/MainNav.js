import React from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

function MainNav() {
  return (
    <nav>
      <Link className="cta-btn" to="/login">Log In</Link>
      <Link className="cta-btn" to="/register">Register</Link>
      <Link className="cta-btn" to="/cookbook">Demo</Link>
    </nav>
  )
}

export default MainNav