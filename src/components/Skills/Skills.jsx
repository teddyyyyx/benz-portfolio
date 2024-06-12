import React from 'react'
import './skills.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.png'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import phpImg from '../../assets/php.png'
import cImg from '../../assets/c.png'
import sassImg from '../../assets/sass.png'
import bootstrap from '../../assets/bootstrap.png'
import figmaImg from '../../assets/figma.png'
import gitImg from '../../assets/git.png'
import githubImg from '../../assets/github.png'
import tailwindImg from '../../assets/tailwind.png'
import photoshopImg from '../../assets/photoshop.png'
import illustratorImg from '../../assets/illustrator.png'
import gimpImg from '../../assets/gimp.png'
import stackoverflowImg from '../../assets/stackoverflow.png'
import canvaImg from '../../assets/canva.png'
import linuxImg from '../../assets/linux.png'


export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skill-title'>Tools I use</span>

        <div className='skill-grid'>
          <div className="main-stack-container">
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
                <img src={phpImg} alt="" />
                <p>PHP</p>
              </div>

              <div>
                <img src={cImg} alt="" />
                <p>C</p>
              </div>
          </div>

          <div className='skill-stack-container-1'>
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
              <img src={tailwindImg} alt="" />
              <p>Tailwind</p>
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
          </div>
        </div>

    </section>
)
}


