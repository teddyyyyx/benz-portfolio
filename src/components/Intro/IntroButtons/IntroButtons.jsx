import React from 'react'
import emailImg from '../../../assets/email.png'
import downloadImg from '../../../assets/downloadImg.png'
import githubImg from '../../../assets/githubImg.png'
import linkedinImg from '../../../assets/linkedinImg.png'
import '../IntroButtons/introButtons.css'

export const IntroButtons = () => {
  return (
    <div className='buttons-container'> 
    <button className="desktopMenuButton" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
        <img src={emailImg} alt="" className="desktopMenuImg" />
        Contact Me
    </button>

    <button className='resume-button'> 
        <a href="">
        <img src={downloadImg} alt="" className='resume-button-img'/>
        Resume
        </a>
    </button>

    <a href="">
      <img src={githubImg} alt="" className='github-img'/>
    </a>

    <a href="" className='linkedin-img'>
        <img src={linkedinImg} alt="" />
    </a>
</div>
)
}
