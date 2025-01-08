import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'


const App = () => {
  // const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  return (
    <div className='dark:bg-gray-900 bg-white'>
      <Navbar/>
      <Home/>
      <Work/>
      <Experience/>
      {/* <Contact/> */}
    </div>
  )
}

export default App
