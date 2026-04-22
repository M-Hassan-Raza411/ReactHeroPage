import React from 'react'

const TestimonialCard = ({ quote, name, role, image }) => {
  return (
    <div className='testimonialCard'>

      <div className="quotecontainer">
        <h1 className="quotation">“</h1>

        
        <p className='testimonialDesc'>" {quote} "</p>
      </div>

      <div className="infocontainer">
        <img className='infoImg' src={image} alt={name} />
        <div className="info">
          <h3 className='testimonialTitle'>{name}</h3>
          <p className='testimonialRole'>{role}</p>
        </div>

      </div>

    </div>
  )
}

export default TestimonialCard
