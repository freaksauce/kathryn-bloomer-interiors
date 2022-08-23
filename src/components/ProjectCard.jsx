import React, { useState } from 'react'
import './projectCard.css'

const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  let toggle = false;
  const toggleHoverClass = (bool) => {
    setIsHovered(bool)
  };

  return (
    <div className="relative text-center mb-9 lg:mb-0">
      <img src={item.photo} alt={item.title} />
      <div className="flex justify-center absolute left-0 top-2/4 w-full mt-[-75px]">
        <div className="project-info bg-white p-12 w-[90%]">
          <h2 className={`project-title ${isHovered ? 'hover': ''}`}>
            <a href={item.link} className="project-link" onMouseEnter={() => toggleHoverClass(true)} onMouseLeave={() => toggleHoverClass(false)}>
              {item.title}
            </a>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard