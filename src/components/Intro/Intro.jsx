import React from 'react';
import './intro.css';
import benzImg from '../../assets/benzImg.png';
import { IntroButtons } from './IntroButtons/IntroButtons';
import { IntroStacks } from './IntroStacks/IntroStacks';

export const Intro = () => {
  return (
    <section id="intro">
        <div className='intro-name-container'>
            <h1 className='intro-name animate-title'>Benz Samson Tagle</h1>
            <p className="intro-bio animate-title">Web Developer && UI/UX Designer</p>
            <p className='intro-extra animate-title'>(Google Search Expert <span> since birth</span>)</p>
            <p className='intro-description animate-title'>
                I  am a <strong>Computer Science</strong> graduate specializing in 
                <strong> Web Development</strong>, passionate about creating intuitive and 
                responsive web applications that blend technical expertise with creative design. 
                {/* With years of profecient academic experience using the holy trinity: HTML, CSS, and JavaScript */}
            </p>
        </div>

            <img src={benzImg} alt="" className='benz-img'/>

        <IntroStacks/>
        <IntroButtons/>
    </section>
)
}

