import React from 'react';
import './works.css';
import worksImg from '../../assets/honeyImg.jpeg'

export const Works = () => {
  return (
    <section id='works'>
      <h1 className="worksTitle">My Works</h1>
      <span className='worksDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit molestias culpa, id quae expedita vel odio labore sint voluptatem sunt praesentium asperiores autem error aspernatur quaerat, rerum doloribus dolorem!</span>
    
      <div className='worksImgContainer'>
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
      </div>

      <button className='worksBtn'>More</button>

    </section>
  )
}
