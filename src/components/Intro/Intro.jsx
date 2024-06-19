import React from 'react';
import './intro.css';
import benzImg from '../../assets/benzImg.png';
import { IntroButtons } from './IntroButtons/IntroButtons';

export const Intro = () => {
  return (
    <section id="intro">
        <div className='intro-name-container'>
            <h1 className='intro-name animate-title'>Benz Samson Tagle</h1>
            <p className="intro-bio animate-title">Web Developer && Designer</p>
            <p className='intro-description animate-title'>
                Crafting ideas into reality, with a dash of code and a splash of imagination, aided with little bit of googling — one keystroke at a time
                </p>

        </div>

            <img src={benzImg} alt="" className='benz-img'/>
            <IntroButtons/>

    </section>
)
}

