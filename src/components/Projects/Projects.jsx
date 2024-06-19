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

          <div>
            <h1>Hanzy Styles</h1>
            Developed the Hanzy Stylez e-commerce website with ReactJS, 
            crafting dynamic and responsive user interfaces for all modern devices. 
            Applied my frontend expertise to ensure optimal performance and user experience."
          </div>
      </div>
      <hr className='projects-hr'/>

{/*  */}

      <div className='projects-container col-reverse'>
        <div>
          <h1>Project 2</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
        </div>

        <img src={testImg} alt="" className='project-img1'/>
      </div>
      <hr className='projects-hr'/>

{/*  */}

      <div className='projects-container'>
        <img src={testImg} alt="" className='project-img'/>

          <div>
            <h1>Project 3</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit quaerat saepe optio tempora architecto non cum reiciendis nam nostrum minima beatae cupiditate cumque, voluptatem vero doloribus! Optio, soluta est?
          </div>
      </div>
    </section>
  )

}
