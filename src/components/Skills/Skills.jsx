import React from 'react'
import {  motion } from "framer-motion";
import './skills.css'

import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.png'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import cImg from '../../assets/c.png'
import sassImg from '../../assets/sass.png'
import bootstrap from '../../assets/bootstrap.png'
import figmaImg from '../../assets/figma.png'
import gitImg from '../../assets/git.png'
import githubImg from '../../assets/github.png'
import photoshopImg from '../../assets/photoshop.png'
import illustratorImg from '../../assets/illustrator.png'
import gimpImg from '../../assets/gimp.png'
import stackoverflowImg from '../../assets/stackoverflow.png'
import canvaImg from '../../assets/canva.png'
import linuxImg from '../../assets/linux.png'


export const Skills = () => {
  return (
    <section id='skills'>
        <h1 className='title'>Tools I use</h1>

        <div className='skill-grid'>
          <motion.div className="main-stack-container"
            initial={{ scale: 0.8, opacity: 0,}}
            whileInView={{ scale: 1, opacity: 1,}}
            transition={{ duration: .3}}
            // viewport={{ once: true }}
          >
              <div>
                <img src={htmlImg} alt="" />
                <p>HTML</p>
              </div>

              <div>
                <img src={cssImg} alt="" />
                <p>CSS</p>
              </div>
              
              <div>
                <img src={javascriptImg} alt="" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={reactImg} alt="" />
                <p>React</p>
              </div>

              <div>
                <img src={cImg} alt="" />
                <p>C</p>
              </div>
          </motion.div>

          <motion.div className='skill-stack-container-1'
          initial={{ scale: 0.8, opacity: 0,}}
          whileInView={{ scale: 1, opacity: 1,}}
          transition={{ duration: .3}}
          // viewport={{ once: true }}
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
              <img src={figmaImg} alt="" />
              <p>Figma</p>
            </div>

            <div>
              <img src={gitImg} alt="" />
              <p>Git</p>
            </div>

            <div>
              <img src={githubImg} alt="" />
              <p>Github</p>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="#00749a"><path d="M2.26 16c0 5.45 3.13 10.145 7.7 12.348L3.478 10.435C2.725 12.174 2.26 14.03 2.26 16zm23.015-.696c0-1.68-.638-2.9-1.16-3.768-.696-1.16-1.333-2.087-1.333-3.246 0-1.275.986-2.435 2.32-2.435h.174C22.84 3.594 19.594 2.26 16 2.26A13.95 13.95 0 0 0 4.522 8.463h.87c1.45 0 3.652-.174 3.652-.174.754-.058.812 1.043.116 1.16 0 0-.754.116-1.565.116l4.986 14.84 3.014-8.986-2.145-5.855L12 9.45c-.754-.058-.638-1.16.058-1.16 0 0 2.26.174 3.594.174 1.45 0 3.652-.174 3.652-.174.754-.058.812 1.043.116 1.16 0 0-.754.116-1.565.116L22.84 24.35l1.4-4.58c.58-1.913 1.043-3.246 1.043-4.464zm-9.043 1.913L12.116 29.16c1.217.348 2.55.58 3.884.58 1.623 0 3.13-.3 4.58-.754-.058-.058-.058-.116-.116-.174zM28.058 9.45l.116 1.4c0 1.4-.232 2.957-1.043 4.928l-4.174 12.116c4.058-2.377 6.84-6.783 6.84-11.884-.058-2.377-.696-4.58-1.74-6.55zM16 0C7.188 0 0 7.188 0 16s7.188 16 16 16 16-7.188 16-16S24.812 0 16 0zm0 31.304C7.594 31.304.754 24.464.754 16A15.27 15.27 0 0 1 16 .754 15.27 15.27 0 0 1 31.246 16c0 8.464-6.84 15.304-15.246 15.304z"/></svg>
              <p>WordPress</p>
            </div>
            
            <div>
                <img src={photoshopImg} alt="" />
                <p>Photoshop</p>
            </div>

            <div>
                <img src={illustratorImg} alt="" />
                <p>Illustrator</p>
            </div>

            <div>
                <img src={gimpImg} alt="" />
                <p>GIMP</p>
            </div>

            <div>
                <img src={stackoverflowImg} alt="" />
                <p>Stackoverflow</p>
            </div>

            <div>
                <img src={canvaImg} alt="" />
                <p>Canva</p>
            </div>

            <div>
                <img src={linuxImg} alt="" />
                <p>Linux Environment</p>
            </div>
          </motion.div>

        </div>
    </section>
)
}


