import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail =(e) => {
    e.preventDefault();

    emailjs.sendForm("service_0huuqn8", 'template_pw9bgw8', form.current, 'THvgMvXsX_-oNm1N0')

    e.target.reset()
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Sami.Muntakim@gmail.com</h5>
            <a href="mailto:Sami.Muntakim@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <FaGithub className='contact_option-icon'/>
            <h4>Github</h4>
            <h5>github.com/SamiHossain</h5>
            <a href="https://github.com/SamiHossain" target='_blank'>Check out a project</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="tmail" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact