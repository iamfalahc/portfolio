import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact'>
      <h1>CONTACT ME</h1>
      <div className='field-wrapper'>
        <input placeholder='Name' type="text" required />
        <input placeholder='Email' type="email" required />
        <input className='message-field' type="text" required placeholder='Message' />
        <button>SUBMIT</button>
      </div>
    </div>
  )
}

export default Contact
