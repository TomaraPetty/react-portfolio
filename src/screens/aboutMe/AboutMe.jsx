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
        <p>As a full stack nerd and React enthusiast, I am constantly seeking new opportunities to expand my skills and knowledge. As a proud queer woman, I am also dedicated to advocating for diversity and inclusion in the tech industry. In my free time, you can find me making music or training Muay Thai.</p>
      </div>
    </div>
  )
}

export default AboutMe