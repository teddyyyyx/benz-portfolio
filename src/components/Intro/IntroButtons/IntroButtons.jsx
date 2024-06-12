import React from 'react'
import emailImg from '../../../assets/email.png'
import downloadImg from '../../../assets/downloadImg.png'
import githubImg from '../../../assets/githubImg.png'
import linkedinImg from '../../../assets/linkedinImg.png'
import callImg from '../../../assets/callImg.png'
import '../IntroButtons/introButtons.css'

export const IntroButtons = () => {
  return (
    <div className='buttons-container'> 
        <div className='cs-btn'>
            <button className="contact-me-button" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={emailImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>

            <button className='resume-button'> 
                <a href="/BenzTagle_resume.pdf">
                <img src={downloadImg} alt="" className='resume-button-img'/>
                Resume
                </a>
            </button>
       </div>

        <div className='glc-btn'>
            <a href="https://github.com/teddyyyyx/" target='_blank' rel='noreferrer'>
                <img src={githubImg} alt="" className='github-img'/>
            </a>

            <a href="https://www.linkedin.com/in/benz-tagle-506475248/" target='_blank' rel='noreferrer'>
                <img src={linkedinImg} alt="" className='linkedin-img'/>
            </a>

            <div className='call-img-container'>
                <img src={callImg} alt="" className='call-img'/>
                <span className='phone-num'>+63 951 621 9997</span>
            </div>
        </div>
    
    </div>
)
}
