import React from 'react'

import {projectsData} from './data/data.js'

import ProjectCard from './ProjectCard'

import cssLogo from './assets/css3.png'
import expressLogo from './assets/express.png'
import githubLogo from './assets/github.png'
import htmlLogo from './assets/html5.png'
import javascriptLogo from './assets/javascript.png'
import mongodbLogo from './assets/mongodb.png'
import nodeLogo from './assets/node-js.png'
import reactLogo from './assets/react.png'
import vscodeLogo from './assets/vscode.png'


const Main = (props) => {
  return (
    <div className='main-container'>
      <div className="about">
        <h1>David Saperstein</h1>
        <h2>Full Stack Developer</h2>
        <p>Diving into the exciting world of development where we create things together and nobody knows why they work! I'm here to learn how many things I don't know with the motivation to learn them.  I'm a determined puzzle-solver that loves to find answers and ask more questions.</p>
        <p>When not coding, I can be found at your local game store playing Magic: the Gathering or some board games.  I have an endless list of fantasy novel recommendations and will tell you all of them if you ask.  If I'm not doing those things, I'm probably selling geek themed bathbombs at local conventions.</p>
      </div>

      <div className='skills'>
        <h1>&lt; Skills &gt;</h1>
        <div className='skills-container'>
          <img src={cssLogo} alt='cssLogo'/>
          <img src={expressLogo} alt='expressLogo'/>
          <img src={githubLogo} alt='githubtLogo'/>
          <img src={htmlLogo} alt='htmlLogo'/>
          <img src={javascriptLogo} alt='javascript'/>
          <img src={mongodbLogo} alt='mongodbLogo'/>
          <img src={nodeLogo} alt='nodeLogo'/>
          <img src={reactLogo} alt='reactLogo'/>
          <img src={vscodeLogo} alt='vscodeLogo'/>
        </div>

        <h1>Languages</h1>
        <div className='languages-container'>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
        </div>

        <h1>Frameworks</h1>
        <div className='frameworks-container'>
          <p>React.js</p>
          <p>Node.js</p>
        </div>

        <h1>Databases</h1>
        <div className='databases-container'>
          <p>MongoDB</p>
        </div>
      </div>
      
      <div className='projects'>
        <h1>&lt; Projects &gt;</h1>
        <div className='projects-container'>
          {projectsData.map(project => {
            console.log(project)
            return (
             <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                screenshots={project.screenshots}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                stack={project.stack}
              />
            )
          })}
        </div>
      </div>
        
      <div className='contact'>
        <h1>&lt; Contact &gt;</h1>
        <p>d.h.saperstein@gmail.com</p>
        <p>954-696-8620</p>
        <p>Salt Lake City, UT</p>
      </div>
    </div>
  )
}

export default Main