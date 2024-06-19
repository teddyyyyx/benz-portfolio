import React from 'react'
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
                <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#111111"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                Contact Me
            </button>

            <button className='resume-button'> 
                <a href="/BenzTagle_resume.pdf" download>
                    <svg className='donwload-icon' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
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
