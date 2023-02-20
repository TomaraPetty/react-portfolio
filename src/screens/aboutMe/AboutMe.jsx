import React from 'react'
import './aboutMe.css'
import tomara from '../../images/Tomara.JPG'

function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
      <div className='profile-image'>
        <img src={tomara} alt='profile image'/>
      </div>
      <div className='about__text'>
        <h1>ABOUT ME</h1>
        <p>As a full stack nerd and React enthusiast, I am focused on building efficient and elegant applications. I am constantly seeking new opportunities to expand my skills and knowledge. Dedicated to advocating for diversity and inclusion in the tech industry. In my free time, you can find me making music or training Muay Thai.</p>
      </div>
    </div>
  )
}

export default AboutMe