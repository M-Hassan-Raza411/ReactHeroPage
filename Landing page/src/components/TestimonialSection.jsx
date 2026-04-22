import React from 'react'
import data from '../Data/testimonial.json'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className='TestimonialSection'>

      <div className="testimonialcontent">
        <h1 className='testimonialSectionTitle'>What People Say</h1>
        <p className='testimonialSectionDesc'>Feedback from industry Leaders and Tech Partners.</p>
      </div>

      <div className="testimonialcardparent">
        {data.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            quote={testimonial.quote}
            role={testimonial.role}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection
