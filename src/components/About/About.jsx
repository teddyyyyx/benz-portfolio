import React from 'react'
import {  motion } from "framer-motion";

import './about.css'
import devDudeImg from '../../../src/assets/Tagle.png'

export const About = () => {
  return (
    <section id='about'>
            <h1 className='title'>About Me</h1>

        <div className='about-container'>

            <img src={devDudeImg} alt="" className='about-img'/>

            <div className='about-info'>
                <p><span>Name:</span> Benz Samson Tagle</p>
                <p><span>Education: </span> Bachelor of Science in Computer Science</p>
                <p><span>School: </span> Bicol University</p>
                <p><span>Email:</span> benztagle.dev@gmail.com</p>
                <p><span>Contact #:</span>  095  1621 9997</p>
                <p><span>GitHub:</span>  github.com/teddyyyyx</p>
            </div>
        </div>
        <hr className='about-hr'/>

        <div className='about-paragraph'>
            <motion.p
                initial={{ scale: 0.8, opacity: 0,}}
                whileInView={{ scale: 1, opacity: 1,}}
                transition={{ duration: .5}}
                // viewport={{ once: true }}
            >
              "Hey there! I'm Benz Samson Tagle, a passionate developer specializing in web development. 
              I hold a degree in Computer Science from Bicol University,
              where I cultivated my love for coding and technology. 
            </motion.p>
  
            <p>
              My journey in web development has been driven by a desire to create impactful, 
              user-friendly web applications that solve real-world problems."
            </p>
            
           <br />
            x
        </div>
        
    </section>
  )
}
