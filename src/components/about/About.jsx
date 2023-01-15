import React from 'react'
import './about.css'
import ME from '../../assets/ME.png'
import{FaAward} from 'react-icons/fa'
import{FaUniversity} from 'react-icons/fa'
import{ImBooks} from 'react-icons/im'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+years of working</small>
            </article>

            <article className='about_card'>
              <FaUniversity className='about_icon'/>
              <h5>Eduction</h5>
              <small>Comp Sci</small>
            </article>

            <article className='about_card'>
              <ImBooks className='about_icon'/>
              <h5>Relevant Courses</h5>
              <small>6+</small>
            </article>
          </div>

          <p>
            Hello welcome to my portforlio website. I am currently a studuent at 
            the university of calgary pursuing a degree in Computer Science. With many relevant courses such as Principles of Programming, OOP, Discrete Mathematics, Linear Algebra, Data Structures and Algorithms
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
      </section>
  )
}

export default About
