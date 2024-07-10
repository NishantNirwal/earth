import React from 'react'
import './styles/Hero.css'
import { NavLink } from 'react-router-dom'
import LogoImg from '../assets/Logo.png'

function Hero() {
  return (
    <section className="heroimg">
      <div className="hero">
        <header className="header-class">
          <img src={LogoImg} alt="logo" height="18px" />
          <nav className="nav-class">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
          </nav>
        </header>
        <div className="hero-div">
          <h1>EARTH</h1>
          <h2>ENDLESS POTENTIAL</h2>
          <button className="main-btn">EXPLORE</button>
        </div>
      </div>

    </section>
  )
}

export default Hero