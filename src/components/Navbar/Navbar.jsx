import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import burgerImg from '../../assets/burgerImg.png'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />

        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-350} duration={1000} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-200} duration={1000} className="desktopMenuListItem">Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-120} duration={1000} className="desktopMenuListItem">Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={1000} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Contact</Link>
        </div>

        <img src={burgerImg} alt="Menu" className='burgerMenu' onClick={()=>setShowMenu(!showMenu)}/>

        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
)
}


