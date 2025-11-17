import React from 'react'
import State from './Sate'
import About from './About'
import Contact from './contact'
import {Routes,Route} from 'react-router-dom'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<State/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default Router 