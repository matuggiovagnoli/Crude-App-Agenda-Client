import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import ContactCard from './ContactCard';
import MenuLateral from './MenuLateral';
import CreateContact from './Modal/CreateContact'


// A contactos y a todo componente hijo del login le debe llegar el id del usuario logeado.
const Contactos = () => {
  
  const [contactos, setContactos] = useState ([]);
  const [modalOn, setModalOn] = useState(false)
  
  const openModal = () => {
    setModalOn(true)
  };

  // A modo de ejemplo le paso el id de usuario por una variable, el id debe ser pasado por porps del usuario logeado para idetificar sus contactos
  let userId = 2
  useEffect(() => {
    axios.get(`http://localhost:3001/api/contact/${userId}`).then((response) => {
      setContactos(response.data);
    })
    // Revisar cuando va actuar este useeffect, que sea cuando cargue el usuario
  }, []);



  return (
    <div className='flex'>
      <MenuLateral/>
      <div className='inline-block'>
        <h1 className='text-6xl text-center font-bold text-sky-50'>Agenda de Contactos</h1>
        {contactos.map((contacto) => <ContactCard key={contacto.id}  nombre={contacto.nombre} mail={contacto.mail} telefono={contacto.telefono}/>)}
        <div className='inline-block ml-6' onClick={openModal}>
          <AiOutlinePlus className='w-20 h-20 border-2 border-black rounded-full  cursor-pointer'/>
        </div>
        {modalOn && <CreateContact setModalOn={setModalOn} />}
      </div>
    </div>
  )
}

export default Contactos