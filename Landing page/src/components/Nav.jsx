import React from 'react'
import { PrimaryButton } from './Button'

const Nav = () => {
  return (
    <div className='navbar'>
      <h1 className="logo">Hassan</h1>
      <div className="navlinks">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <PrimaryButton text="Hire me" />
    </div>
  )
}

export default Nav
