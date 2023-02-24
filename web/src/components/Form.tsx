import React from 'react'
import './Form.css'

const Form = (props:any) => {
  return (
        <form action="" className='form--container'>
            <h2>Let's Build <br/> Something Amazing.</h2>
            <input type="text" name="name" value="Name"/>
            <input type="email" name="mail" id="" value="Mail"/>
            <textarea name="message" id="" cols={30} rows={4} value="What's on your mind?"></textarea>
            <button>Send it!</button>
        </form>
  )
}

export default Form
