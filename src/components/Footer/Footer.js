import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>Made with love by <Link to="https://charlotteshih.github.io/portfolio/" target="_blank">Charlotte Shih</Link></p>
    </footer>
  )
}

export default Footer