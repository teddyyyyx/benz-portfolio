import React from 'react'
import './projects.css'
import prj1 from '../../assets/project-imgs/hanzy-style_prj1.png'
import prj2 from '../../assets/project-imgs/HoneyFlix_prj2.png'
import prj3 from '../../assets/project-imgs/Benz_prj3.png'


export const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='title'>Recent Projects</h1>


      <div className='projects-container'>
        <a href="https://teddyyyyx.github.io/hanzy-stylez-react/" target='__blank'>
          <img src={prj1} alt="" className='project-img'/>
          <p className='visit-site-left'>Visit website</p>
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
          <p className='visit-site-right'>Visit website</p>
        </a>
      </div>
      <hr className='projects-hr'/>

{/*  */}

      <div className='projects-container'>
        <img src={prj3} alt="" className='project-img'/>

          <div>
            <h1>Personal Website</h1>
            I built my personal portfolio website using ReactJS, showcasing 
            my expertise as a web developer. I extensively utilized advanced 
            React features for efficient state management and handling of side effects. 
            This approach allowed me to create a dynamic and interactive user experience,
            emphasizing modularity and code reusability.
          </div>
      </div>
    </section>
  )

}
