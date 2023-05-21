import React, { useState } from 'react'
import './projectCard.css'

const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const toggleHoverClass = (bool) => {
    setIsHovered(bool)
  };

  return (
    <div className="relative mb-9 lg:mb-0">
      <div className="w-full">
        <div className="project-info bg-white p-3">
          <h2 className={`project-title ${isHovered ? 'hover': ''}`}>
            {item.title}
          </h2>
        </div>
        <a href={item.link}>
          <img src={item.photo} alt={item.title} width="100%" height="690" loading='lazy' />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard