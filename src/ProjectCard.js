import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className='projects'>
      <a href={props.deployedLink} target="_blank">
        <h2>{props.title}</h2>
      </a>
      <a href={props.deployedLink} target="_blank">
        <img className='screenshots' src={props.screenshots[0]} alt={props.title}/>
      </a>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard