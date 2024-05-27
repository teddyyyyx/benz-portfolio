import React from 'react';
import './intro.css';
import benzImg from '../../assets/benzImg.png';
import githubImg from '../../assets/githubImg.png'
import linkedinImg from '../../assets/linkedinImg.png'
import {Link} from 'react-scroll';

// import emailImg from '../../assets/email.png'

export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello world, </span>
            <span className="introText">I'm <span className="introName">Benz </span><br /> Web Developer</span>
            <p className="introPara">I'm that dude who loves to code <br /><span className="introPara2"> ... //Turning ideas into reality</span></p>
           
            <div className='connectIconsContainer'>
                <Link className='connectBtn' activeClass='active' to='contact' spy={true} smooth={true} duration={500} > 
                    Connect with me!
                </Link>

            </div>
        </div>

        <img src={benzImg} alt="" className='benzImg'/>
    </section>
)
}
