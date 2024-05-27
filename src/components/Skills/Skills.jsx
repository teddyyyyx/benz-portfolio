import React from 'react'
import './skills.css'
import skill1 from '../../assets/skill1.png'
import skill2 from '../../assets/skill2.png'
import skill3 from '../../assets/skill3.png'
import skill4 from '../../assets/skill4.png'
import skill5 from '../../assets/skill5.png'


export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Things I do</span>
        <span className="skillDescription">I am a dedicated web developer with a strong passion for coding, committed to continuously improve my skills and creating innovative digital experiences. Solid understanding of the holy trinity: HTML. CSS, JavaScript</span>

        <div className="skillBarContainer">
          <div className='skillBar'>
            <img src={skill1} alt="" />
            <p>HTML</p>
          </div>

          <div className='skillBar'>
            <img src={skill2} alt="" />
            <p>CSS</p>
          </div>
          
          <div className='skillBar'>
            <img src={skill3} alt="" />
          </div>
          <div className='skillBar'>
           <img src={skill5} alt="" />
          </div>

          <div className='skillBar'>
           <img src={skill4} alt="" />
          </div>


          <div className='skillBar'>
           <img src={skill1} alt="" />
          </div>
       </div>

    </section>
)
}


