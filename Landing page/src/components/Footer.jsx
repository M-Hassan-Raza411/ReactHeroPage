import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="left">
                <h2 className='footerheading'>Hassan Raza</h2>
                <p className='footerdesc'>© {new Date().getFullYear()} Hassan Raza. All rights reserved.</p>

            </div>
            <div className="rights">
                <div className="links">
                    <a href="#home" className="links">Home</a>
                    <a href="#skills" className="links">Skills</a>
                    <a href="#contact" className="links">Contact</a>
                </div>
            </div>

        </div>
    )
}

export default Footer
