import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const CreateContact = ({setModalOn}) => {
  const [newContact, setNewContact] = useState ({})
  
  const close = () => {
    setModalOn(false)
  };
  
  const sendContact = () => {
    axios.post('http://localhost:3001/api/contact', {
      nombre: newContact.nombre,
      telefono: newContact.telefono,
      mail: newContact.email,
      //userId: userId
    })
  };

  return (
    <div className='bg-zinc-300 opacity-80 fixed inset-0 z-50'>
      <div className='flex h-screen justify-center items-center'>
        <div className='w-90 bg-blue-900 border-2 rounded-sm border-black p-3'>
          <MdOutlineClose className='w-7 cursor-pointer' onClick={close}/>
          <h1>Nuevo Contacto</h1>
          <div className='pt-8'>
            <div className='m-5'>
              <label className=''>Nombre: </label>
              <input className='w-40 '/>
            </div>
            <div className='m-5'>
              <label className=''>Telefono: </label>
              <input className='w-40 '/>
            </div>
            <div className='m-5'>
              <label className=''>E-mail: </label>
              <input className='w-40 '/>
            </div>
          </div>
          <button className=''>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContact