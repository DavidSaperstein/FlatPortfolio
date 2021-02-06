import React from 'react'

import './styles.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <div className="app-background"/>
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  )
}

export default App


