import React from 'react'

import cv from './assets/curriculum-vitae.png'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import me from './assets/Me.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <img src={me} alt={'Me'} className='me'/>
        <h2>About</h2>
        <h2>Skills</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
        <div className='sidebar-logos-container'>
          <img src={linkedinLogo} alt={'linkedinLogo'} className='sidebar-logos'/>
          <img src={githubLogo} alt={'githubLogo'} className='sidebar-logos'/>
          <img src={cv} alt={'cv'} className='sidebar-logos'/>
      </div>
    </div>
  )
}

export default Sidebar