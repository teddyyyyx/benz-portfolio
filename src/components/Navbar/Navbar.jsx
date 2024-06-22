import React, { useState } from 'react'
import './navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowMenu(false);
  };
  return (
    <nav className="navbar">
          <h1 onClick={scrollToTop} className='logo-name'>benz.st</h1>


        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-350} duration={1000} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={1000} className="desktopMenuListItem">Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={1000} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem">Contact</Link>
        </div>

        <svg className='burgerMenu' onClick={()=>setShowMenu(!showMenu)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <path d="M5 12H18" stroke="#e7e3e3de" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 17H11" stroke="#e7e3e3de" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 7H15" stroke="#e7e3e3de" strokeWidth="2" strokeLinecap="round"/>
            </g>
        </svg>

        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-20} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
)
}


