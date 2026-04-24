import React from 'react'

const ProjectCard = ({ title, desc, image }) => {
  return (
    <div className='projectCard'>
      <img className='projectImg' src={image} alt={title} />
      <h3 className='projectTitle'>{title}</h3>
      <p className='projectDesc'>{desc}</p>
      <a href="#"  rel="noopener noreferrer" className='projectlink'>
        View Project ➡
      </a>
    </div>
  )
}

export default ProjectCard
