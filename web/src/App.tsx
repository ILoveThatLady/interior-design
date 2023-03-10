import React, { useState, useEffect } from 'react'
import { Hero, About, Find, Form, Gallery } from './components'
import { CSSTransition } from 'react-transition-group';
import './App.css'

const App = () => {
  const [showContent, setShowContent] = useState(true);

  const handleClick = () => {
    setShowContent(!showContent)
  }

  return (
    <div className='main--container'>
      { showContent ? <Hero /> : null }
      { showContent ? <About /> : null }
      { showContent ? <Find onClick={handleClick} /> : null }
      { showContent ? <Form /> : null }
      { !showContent ? <Gallery onClick={handleClick}/> : null }
    </div>
  )
}

export default App
