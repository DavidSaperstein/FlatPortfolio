import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className='projects'>
      <Link to={props.deployedLink}>
        <h2>{props.title}</h2>
      </Link>
      <Link to ={props.deployedLink}>
        <img className='screenshots' src={props.screenshots[0]} alt={props.title}/>
      </Link>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard