import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import emailImg from '../../assets/email.png'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />

        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>
        </div>

        <Link>
          <button className="desktopMenuButton">
              <img src={emailImg} alt="" className="desktopMenuImg" />
              Contact Me
          </button>
        </Link>
    </nav>
)
}


