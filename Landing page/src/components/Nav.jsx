import React from 'react'
import { PrimaryButton } from './Button'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <h1 className="logo">Hassan</h1>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <PrimaryButton text="Hire me" />
    </div>
  )
}

export default Nav
