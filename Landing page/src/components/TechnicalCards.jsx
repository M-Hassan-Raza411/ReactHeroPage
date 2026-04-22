import React from 'react'
import * as Icons from "lucide-react";

const TechnicalCards = ({ props }) => {
  const { title, icon } = props;
  const Icon = Icons[icon];
  
  

  return (
    <div className='techcard'>
      <Icon className='techcard-icon' />
      <h2 className='techcard-title'>{title}</h2>
    </div>
  )
}

export default TechnicalCards
