import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

class MainNav extends Component {
  render() {
    return (
      <nav>
        <Link className="cta-btn" to="/login">Log In</Link>
        <Link className="cta-btn" to="/register">Register</Link>
      </nav>
    )
  }
}

export default MainNav