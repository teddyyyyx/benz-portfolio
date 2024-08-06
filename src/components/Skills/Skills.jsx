import React from 'react'
import {  motion } from "framer-motion";
import './skills.css'

import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import javascript from '../../assets/svg/javascript.svg'
import react from '../../assets/svg/react.svg'
import sassImg from '../../assets/svg/sass.svg'
import bootstrap from '../../assets/svg/bootstrap.svg'
import figma from '../../assets/svg/figma.svg'
import git from '../../assets/svg/git.svg'
import github from '../../assets/svg/github.svg'
import photoshop from '../../assets/svg/photoshop.svg'
import illustrator from '../../assets/svg/illustrator.svg'
import gimp from '../../assets/svg/gimp.svg'
import stackoverflow from '../../assets/svg/stackoverflow.svg'
import canva from '../../assets/svg/canva.svg'
import tux from '../../assets/svg/tux.svg'
import framer from '../../assets/svg/framer-motion.svg'
import wordpress from '../../assets/svg/wordpress.svg'
import astro from '../../assets/svg/astro.svg'



export const Skills = () => {

  return (
    <section id='skills'>
        <h1 className='title'>Tools I use</h1>

        <div className='skill-layout'>
          <div className='skill-grid'>
          <motion.div className="main-stack-container"
            initial={{ scale: 0.8, opacity: 0,}}
            whileInView={{ scale: 1, opacity: 1,}}
            transition={{ duration: 0}}
            viewport={{ once: true }}
          >
              <div>
                <img src={html} alt="" />
                <p>HTML</p>
              </div>

              <div>
                <img src={css} alt="" />
                <p>CSS</p>
              </div>
              
              <div>
                <img src={javascript} alt="" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <div>
                <img src={astro} alt="" />
                <p>Astro</p>
              </div>
          </motion.div>

          <motion.div className='skill-stack-container-1'
          initial={{ scale: 0.8, opacity: 0,}}
          whileInView={{ scale: 1, opacity: 1,}}
          transition={{ duration: 0}}
          viewport={{ once: true }}
          >
            <div>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img src={sassImg} alt="" />
              </a>
              <p>SASS</p>
            </div>
            <div>
              <img src={bootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
            
            <div>
              <img src={figma} alt="" />
              <p>Figma</p>
            </div>

            <div>
              <img src={git} alt="" />
              <p>Git</p>
            </div>

            <div>
              <img src={github} alt="" />
              <p>Github</p>
            </div>

            <div>
              <img src={wordpress} alt="" />
              <p>WordPress</p>
            </div>
            
            <div>
                <img src={photoshop} alt="" />
                <p>Photoshop</p>
            </div>

            <div>
                <img src={illustrator} alt="" />
                <p>Illustrator</p>
            </div>

            <div>
                <img src={gimp} alt="" />
                <p>GIMP</p>
            </div>

            <div>
                <img src={framer} alt="" />
                <p>Framer-Motion</p>
            </div>

            <div>
                <img src={stackoverflow} alt="" />
                <p>Stackoverflow</p>
            </div>

            <div>
                <img src={canva} alt="" />
                <p>Canva</p>
            </div>

            <div>
                <img src={tux} alt="" />
                <p>Linux Environment</p>
            </div>
          </motion.div>
          </div>

        </div>
    </section>
) 
}


