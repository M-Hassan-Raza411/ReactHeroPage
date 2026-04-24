import React from 'react'
import { PrimaryButton, SecondaryButton } from './Button'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <span className='heroinfo'>Hello, I'm  Hassan Raza</span>
      <h1 className='herotitle'>Full Stack Developer</h1>
      <p className='herodesc'>
        I build exceptional digital experiences that are fast, accessible, and visually appealing. With expertise in both front-end and back-end development, I create seamless and efficient web applications that meet the needs of users and businesses alike. Let's work together to bring your ideas to life!  
      </p>
      <div className="herobtns">
        <PrimaryButton text="Download CV" />
        <SecondaryButton text="Contact me" />
      </div>
    </div>
  )
}

export default Hero
