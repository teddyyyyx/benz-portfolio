import React from 'react';
import './intro.css';
import benzImg from '../../assets/benzImg.png';
import { Link } from 'react-scroll';
import emailImg from '../../assets/email.png'

export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Benz </span><br /> Web Developer</span>
            <p className="introPara">I'm that dude who loves to code <br /> ... //Turning ideas into reality</p>
          
            <Link>
                <button className='btn'>
                    <img src={emailImg} alt="" className='emailImg'/>
                    taglebenz123@gmail.com
                </button>
            </Link>
        </div>

        <img src={benzImg} alt="my photo" className='benzImg'/>
    </section>
)
}
