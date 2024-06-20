import React from 'react'
import './projects.css'
import testImg from '../../assets/test-img.png'
import prj1 from '../../assets/project-imgs/hanzy-style_prj1.png'
import prj2 from '../../assets/project-imgs/HoneyFlix_prj2.png'


export const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='title'>Recent Projects</h1>


      <div className='projects-container'>
        <a href="https://teddyyyyx.github.io/hanzy-stylez-react/" target='__blank'>
          <img src={prj1} alt="" className='project-img'/>
        </a>

          <div>
          <a href="https://teddyyyyx.github.io/hanzy-stylez-react/" target='__blank'>
            <h1>Hanzy Styles</h1>
          </a>
            Developed the Hanzy Stylez e-commerce website with ReactJS, 
            crafting dynamic and responsive user interfaces for all modern devices. 
            Applied my frontend expertise to ensure optimal performance and user experience.
          </div>
      </div>
      <hr className='projects-hr'/>

{/* */}

      <div className='projects-container col-reverse'>
        <div>
        <a href="https://teddyyyyx.github.io/movieflix-react/" target='__blank'> 
          <h1>HoneyFlix</h1>
        </a>
          Crafted with love using ReactJS and fetched movie data from the Open Movie Database API. 
          This website is designed for you to search your favorite movie and its information.
          Ensuring compatibility and responsiveness that is truly
          compatible for all modern viewports.          
        </div>

        <a href="https://teddyyyyx.github.io/movieflix-react/" target='__blank'> 
          <img src={prj2} alt="" className='project-img1'/>
        </a>
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
