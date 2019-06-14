import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
  return (
    <header>
      <h1><Link className="headLink" to="/">Fork This!</Link></h1>
      <h2>The Smartest, Simplest, Fastest Way To Write, Edit, and Organize Your Recipes</h2>
    </header>
  )
}

export default Header