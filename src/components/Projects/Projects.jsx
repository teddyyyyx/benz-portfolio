import React from 'react'
import './projects.css'
import testImg from '../../assets/test-img.png'
import prj1 from '../../assets/project-imgs/hanzy-style_prj1.png'


export const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='title'>Recent Projects</h1>


      <div className='projects-container'>
        <a href="https://teddyyyyx.github.io/hanzy-stylez-react/" target='__blank'>
          <img src={prj1} alt="" className='project-img'/>
        </a>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
          </p>
      </div>
      <hr className='projects-hr'/>

{/*  */}

      <div className='projects-container col-reverse'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
        </p>

        <img src={testImg} alt="" className='project-img1'/>
      </div>
      <hr className='projects-hr'/>

{/*  */}

      <div className='projects-container'>
        <img src={testImg} alt="" className='project-img'/>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
          </p>
      </div>
      <hr className='projects-hr'/>
      
{/*  */}

      <div className='projects-container col-reverse'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
        </p>

        <img src={testImg} alt="" className='project-img1'/>
      </div>
    </section>
  )

}
