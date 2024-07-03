import React from 'react';
import './intro.css';
import { IntroButtons } from './IntroButtons/IntroButtons';
import lottie_mobile from '../../assets/lottie/lottie-mobile.json'
import lottie_background from '../../assets/lottie/lottie-background.json'
import Lottie from 'lottie-react';

export const Intro = () => {
  return (
    <section id="intro">
        <div className='intro-name-container'>
            <h1 className='intro-name animate-title'>Benz Samson Tagle</h1>
            <p className="intro-bio animate-title">Web Developer && Designer</p>
            <p className='intro-description animate-title'>
                Crafting ideas into reality, with a dash of code and a splash of imagination, aided with a little bit of stackoverflow — one keystroke at a time
                </p>
        </div>

            <Lottie animationData={lottie_mobile} className='benz-img'/>
          
            <IntroButtons/>
            <Lottie animationData={lottie_background} className='lottie-background'/>
            {/* <Lottie animationData={lottie_dude} className='benz-img'/> */}
    </section>
)
}

