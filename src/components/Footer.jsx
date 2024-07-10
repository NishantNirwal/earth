import React from 'react'
import './styles/Footer.css'
import footimg from '../assets/Logof.png'

function Footer() {
  return (
    <footer className="foot">
      <nav className="nav-foot">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Contact</a>
      </nav>
      <img src={footimg} alt="logo" height="30px"></img>
      <p>©2022 Earth. All right reserved.</p>
    </footer>
  )
}

export default Footer