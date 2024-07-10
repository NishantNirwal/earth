import React from 'react'
import './styles/PageHero.css'
import { NavLink } from 'react-router-dom'
import LogoImg from '../assets/Logo.png'

function PageHero({title}) {
    return (
        <section className="pageheroimg">
            <div className="pagehero">
                <header className="header-class">
                    <img src={LogoImg} alt="logo" height="18px" />
                    <nav className="nav-class">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/services'}>Services</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </nav>
                </header>

                <div className="pagehero-div">
                    <h1>{title}</h1>
                </div>
            </div>

        </section>
    )
}

export default PageHero