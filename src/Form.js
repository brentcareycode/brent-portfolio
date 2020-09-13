import React from 'react'
import './Form.css'

const Form = (props) => {
  return (
    <form className='Form'>
    <h2>Enter your information below!</h2>
    <label htmlFor='company'>Company Name:</label>
    <br/>
    <input placeholder='Hiring Company' id='company'/>
    <br/>
    <label htmlFor='recruiter'>Recruiter Name:</label>
    <br/>
    <input placeholder='Your Name' id='recruiter'/>
    <br/>
    <label htmlFor='email'>Contact Email:</label>
    <br/>
    <input type='email' placeholder='Your Email' id='email'/>
    <br/>
    <label htmlFor='phone'>Phone Number:</label>
    <br/>
    <input placeholder='Your Number' id='phone'/>
    <br/>
    <button onclick={props.cancel} className='cancelButton'>Cancel</button>
    <button className='submitButton'>Submit</button>
    </form>
  )
}

export default Form