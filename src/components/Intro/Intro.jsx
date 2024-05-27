import React from 'react';
import './intro.css';
import benzImg from '../../assets/benzImg.png';
import { IntroButtons } from './IntroButtons/IntroButtons';

export const Intro = () => {
  return (
    <section id="intro">
        <div className='intro-name-container'>
            <h1 className='intro-name'>Benz Samson Tagle</h1>
            <p className='intro-bio'>{'< Web Developer && Designer />'}</p>
    
            <div className='intro-paragraph-container'>
                <p>I am a <strong>Computer Science</strong> graduate specializing in <strong>Web Development</strong>, passionate about creating intuitive and responsive web applications that blend technical expertise with creative design.</p>
                <br /> <br />
                <p>“With proper fundamentals, <br /> Adapting to different techs are nothing but  a breeze”</p>
            </div>
        </div>

        <img src={benzImg} alt="" className='benz-img'/>

        <IntroButtons/>
    </section>
)
}
