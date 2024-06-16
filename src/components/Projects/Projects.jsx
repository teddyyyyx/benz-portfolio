import React from 'react'
import './projects.css'
import testImg from '../../../src/assets/test-img.png'

export const Projects = () => {
  return (
    <section id='projects'>
      <h1 className=' title'>Recent Projects</h1>

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
