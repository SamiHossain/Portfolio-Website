import React from 'react'
import { icons } from 'react-icons'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>My skills</h5> 
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Languages and Frameworks</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <h4>Java</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Python</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>C</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>SQL</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>HTML/CSS</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>React</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Node.js</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Developer Tools and Libraries</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Git</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>VS Code</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>PyCharm</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Eclipse</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>NetBeans</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Excel</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>NumPy</h4>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <h4>Pandas</h4>
            </article>
          </div>
        </div>
      </div>

      </section>
  )
}

export default Experience