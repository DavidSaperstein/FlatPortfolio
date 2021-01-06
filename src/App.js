import React from 'react'

import './styles.css'
import Sidebar from './Sidebar'
import Main from './Main'
// import Footer from './Footer'

const App = () => {
  return (
    <div className='grid-container'>
      <Sidebar />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

export default App


