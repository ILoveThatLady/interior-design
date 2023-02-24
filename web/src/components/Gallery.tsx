import React from 'react'
import './Gallery.css'

const Gallery = (props: any) => {
  return (
      <div className='gal--container'>
        <div className='img1'></div>
        <div className='img2'></div>
        <div className='img3'></div>
        <div className='img4'></div>
        <div className='img5'></div>
        <div className='img6'></div>
        <section className='arrow'>
          <button onClick={props.onClick}></button>
        </section>
        <div className='img7'></div>
      </div>
  )
}

export default Gallery
