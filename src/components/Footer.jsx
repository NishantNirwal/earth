import React from 'react'
import './styles/Footer.css'
import footimg from '../assets/Logof.png'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="foot">
      <nav className="nav-foot">
      <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
      </nav>
      <img src={footimg} alt="logo" height="30px"></img>
      <p>©2024 Earth. All right reserved.</p>
    </footer>
  )
}

export default Footer