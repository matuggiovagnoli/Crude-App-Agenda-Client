import React from 'react'
import "./ContactCard.css"

const ContactCard = () => {
  return (
    <div className='Contact_Card'>
        <h3 className='Contact_Name'>name</h3>
        <h4 className='Phone_number'>Phone: 123124</h4>
        <p className='mail'>mail: mail@gmail.com</p>
        <button className='update'>Modificar</button>
        <button className='delete'>Eliminar</button>
    </div>
  )
}

export default ContactCard