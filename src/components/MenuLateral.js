import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { MdArrowBackIos } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsFilePost } from 'react-icons/bs';
import { BsCalendar3 } from 'react-icons/bs';
import logo from '../Assets/descarga.png';



const MenuLateral = () => {
  let navigate = useNavigate();
  //ponemos un username cualquier hasta importar el context y tener acceso a la info del user
  let username = 'N'

  const [open, setOpen] = useState (true);
 

  return (
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen  p-5 pt-8 bg-blue-900 relative`}>
        <MdArrowBackIos className={`absolute pl-1 cursor-pointer rounded-full -right-4 top-9 w-7 h-7 border-2 border-blue-900 bg-sky-50 ${!open && 'rotate-180'}`} onClick={() => (setOpen(!open))}/>
        <div className='flex gap-x-4 items-center cursor-pointer'>
          <img src={logo} className={`rounded-lg w-12 bg-white`}/>
          <h1 className={`text-white font-bold text-xl hover:underline ${!open && 'scale-0'}`}>AGENDA DIARIA</h1>
        </div>
        <div className='pt-8'>
          <div className='text-white text-sm flex items-center gap-x-4 cursor pointer hover:bg-sky-600 rounded-md p-2 cursor-pointer' onClick={() => {navigate(`/Inicio/${username}/Contactos`)}}>
            <RiContactsBookLine className='w-7 h-7'/>
            <h2 className={`text-xl font-medium ${!open && "hidden"} origin-left duration-200`}>Contactos</h2>
          </div>
          <div className='text-white text-sm flex items-center gap-x-4 cursor pointer hover:bg-sky-600 rounded-md p-2 cursor-pointer' onClick={() => {navigate(`/Inicio/${username}/Posts`)}}>
            <BsFilePost className='w-7 h-7'/>
            <h2 className={`text-xl font-medium ${!open && "hidden"} origin-left duration-200`}>Post It</h2>
          </div>
          <div className='text-white text-sm flex items-center gap-x-4 cursor pointer hover:bg-sky-600 rounded-md p-2 cursor-pointer' onClick={() => {navigate(`/Inicio/${username}/Calendario`)}}>
            <BsCalendar3 className='w-7 h-7'/>
            <h2 className={`text-xl font-medium ${!open && "hidden"} origin-left duration-200`}>Calendario</h2>
          </div>
        </div>
      </div>
  )
}

export default MenuLateral