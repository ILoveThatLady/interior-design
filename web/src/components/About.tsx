import React from 'react'
import './About.css'

const About = (props:any) => {
  return (
    <div className='abt--container'>
      <div className='txt--container'>
        <h2>About Us.</h2>
        <p>We are a fake interior<br/>design company. <br/>That's it.</p>
      </div>
      <button>Contact us</button>
    </div>
  )
}

export default About
