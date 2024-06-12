import React from 'react';
import './works.css';
import worksImg from '../../assets/honeyImg.jpeg'
import worksImg2 from '../../assets/honeyImg2.jpeg'

export const Works = () => {
  return (
    <section id='works'>
      <h1 className="worksTitle">Honeygurlbabes</h1>
    
      <div className='worksImgContainer'>
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg} alt="" className="worksImg" />
        <img src={worksImg2} alt="" className="worksImg" />
        <img src={worksImg2} alt="" className="worksImg" />
        <img src={worksImg2} alt="" className="worksImg" />
      </div>
    </section>
  )
}
