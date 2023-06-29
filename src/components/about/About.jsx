import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>      
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0 years working</small>
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Hlw my name is <strong> Alok Paul </strong>. I currently i am persuing BTech from Techno International New Town, Kolkata 2025(UG). Currently i am learning MERN Stack devolopment. This is one of my React Js Project....
            <br />
            If you want to contact me your can fill the below contact form or you can get all my contact details from the top <strong> <a href="#header">Download CV</a> </strong> option... 
            <br />
            Thank YOu.....
          </p>
          <a href="#contact" className='btn btn-primart' >Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About
