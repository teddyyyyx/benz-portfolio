import React, {useRef} from 'react'
import {  motion } from "framer-motion";
import './contact.css'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_i6v8cng', 'template_3dyerrh', form.current, {
            publicKey: 'Ez38rWwivqN7l8b7f',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset(); 
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

       
  return (
      <section id="contact"> 
          <div>
            <motion.h1 className='contactTitle'
            initial={{ scale: 5, opacity: 0,}}
            whileInView={{ scale: 1, opacity: 1,}}
            transition={{ duration: .8}}
            viewport={{ once: true }}
            >
              Get in touch!
            </motion.h1>
            <span className='contactDescription'>Reach out for any queries! Fill the form below.</span>
      
            <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='name' required/>
                <input type="email" className='email' placeholder='Enter Email' name='email' required/>
                <textarea className='contactMessage' rows="5" placeholder='Your message' name="message" required></textarea>
                <button className='submit-btn' type='submit' value="send">Submit</button>
            </form>
          </div>

          <p className='extra'>
            Portfolio made with React
          </p>
      </section>
  )
}
