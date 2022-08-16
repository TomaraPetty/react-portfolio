import React from 'react'
import './aboutMe.css'
import tomara from '../../images/Tomara.JPG'

function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
      <div>
        <img src={tomara} alt='profile image'/>
      </div>
      <div className='about__text'>
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum corrupti fugiat totam iste aperiam, eum, odit perferendis quia et facilis aspernatur animi dolore unde molestiae sint soluta iure possimus accusantium?</p>
      </div>
    </div>
  )
}

export default AboutMe