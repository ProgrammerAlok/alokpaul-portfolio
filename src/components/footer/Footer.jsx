import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo' >ALOK PAUL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#"> <FaFacebookF /> </a>
        <a href="#"> <FiInstagram /> </a>
        <a href="https://twitter.com/alok__paul"> <IoLogoTwitter /> </a>
        <a href="https://www.linkedin.com/in/alokpaul1/"> <BsLinkedin /> </a>
        <a href="https://github.com/ProgrammerAlok"> <BsGithub /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alok Paul. All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
