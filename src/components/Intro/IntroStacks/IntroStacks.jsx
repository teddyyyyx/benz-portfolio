import React from 'react'
import './introStacks.css'
import htmlImg from '../../../assets/html.png'
import cssImg from '../../../assets/css.png'
import javascriptImg from '../../../assets/javascript.png'
import reactImg from '../../../assets/react.png'
import phpImg from '../../../assets/php.png'
import sassImg from '../../../assets/sass.png'
import cImg from '../../../assets/c.png'

export const IntroStacks = () => {
  return (
        <div className='stacks-container'>
            <span className='stacks-text'>Tech Stacks |</span>
            <span className='hide '>My Main Stack <hr /></span>

            <div className='stacks-imgs'>
                <img className='ht' src={htmlImg} alt="" />
                <img src={cssImg} alt="" />
                <img src={javascriptImg} alt="" />
                <img src={reactImg} alt="" />
                <img src={phpImg} alt="" />
                <img src={cImg} alt="" />
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img src={sassImg} alt="" />
                </a>
            </div>
        </div>
  )
}
