import React from 'react'
import "./ContactCard.css"

const ContactCard = ({nombre, mail, telefono}) => {
  return (
    <div className='Contact_Card'>
        <h3 className='Contact_Name'>{nombre}</h3>
        <h4 className='Phone_number'>Telefono:  {telefono}</h4>
        <p className='mail'>E-mail: {mail}</p>
        <button className='update'>Modificar</button>
        <button className='delete'>Eliminar</button>
    </div>
  )
}

export default ContactCard