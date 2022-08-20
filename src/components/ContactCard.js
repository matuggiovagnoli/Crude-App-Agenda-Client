import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const ContactCard = ({nombre, mail, telefono}) => {
  return (
    <div className=' bg-zinc-300 w-80 h-40 rounded-sm m-10 inline-block'>
        <h3 className='text-xl text-center font-bold'>{nombre}</h3>
        <h4 className='Phone_number'><BsTelephone className='inline m-2'/>Telefono:  {telefono}</h4>
        <p className='mail'><AiOutlineMail className='inline m-2'/> E-mail: {mail}</p>
        <button className='bg-cyan-400 hover:bg-cyan-500 hover:font-semibold rounded-full p-2'>Modificar</button>
        <button className='bg-cyan-400 hover:bg-cyan-500 rounded-full p-2'>Eliminar</button>
    </div>
  )
}

export default ContactCard