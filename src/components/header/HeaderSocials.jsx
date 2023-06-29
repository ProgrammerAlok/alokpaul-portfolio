import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alokpaul1/" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com/ProgrammerAlok" target='_blank'> <BsGithub /> </a>
        <a href="https://leetcode.com/alokpaul1/" target='_blank'> <SiLeetcode /> </a>
        <a href="https://codeforces.com/profile/alokpaul" target='_blank'> <SiCodeforces /> </a>
      
    </div>
  )
}

export default HeaderSocials
