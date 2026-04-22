import React from 'react'
import data from '../Data/technicalData.json'

import TechnicalCards from './TechnicalCards';
const TechnicalSection = () => {
  return (
    <div className='techcardsection'>
        <div className='techcardsection-content'>
            <h1 className='section-title'>Technical Skills</h1>
            <p className='section-desc'>Here are some of the technologies and tools I’m proficient in, mainly focused on frontend development and modern web workflows. </p>
        </div>
      <div className="techcardcontainer">
        {data.map((item,idx) => (
              <TechnicalCards key={idx} props={item} />
          
        ))}

      </div>
    </div>
  )
}

export default TechnicalSection
