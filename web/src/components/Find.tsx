import React, { useState, useEffect } from 'react'
import './Find.css'

const Find = (props: any) => {

  return (
    <div className='find--container'>
      <h2>Find your style.</h2>
      <span>we can help you</span>
      <button onClick={props.onClick} >our work?</button>
    </div>
  )
}

export default Find
