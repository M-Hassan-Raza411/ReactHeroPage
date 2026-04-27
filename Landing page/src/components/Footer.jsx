import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="left">
                <h2 className='footerheading'>Hassan Raza</h2>
                <p className='footerdesc'>© {new Date().getFullYear()} Hassan Raza. All rights reserved.</p>

            </div>
            <div className="rights">
                <div className="links">
                    <NavLink to="/" className='links'>Home</NavLink>
                    <NavLink to="/testimonials" className='links' >Testimonials</NavLink>
                    <NavLink to="/contact" className='links'>Contact</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Footer
