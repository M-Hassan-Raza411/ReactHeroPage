import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../Data/projectData.json'

const ProjectSection = () => {
  return (
    <div className='projectSection'>
        <h1 className='projectSectionTitle'><span>Our</span> Projects</h1>
        <p className='projectSectionDesc'>Explore our latest innovations and cutting-edge solutions.</p>

        <div className="projectcardparent">
      {data.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          desc={project.desc}
          image={project.image}
        />
      ))}
      </div>
    </div>
  )
}

export default ProjectSection
