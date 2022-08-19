import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContactCard from "./ContactCard"
import "./Contactos.css"


// A contactos y a todo componente hijo del login le debe llegar el id del usuario logeado.
const Contactos = () => {
  
  const [contactos, setContactos] = useState ([]);

  // A modo de ejemplo le paso el id de usuario por una variable, el id debe ser pasado por porps del usuario logeado para idetificar sus contactos
  let userId = 2
  useEffect(() => {
    axios.get(`http://localhost:3001/api/contact/${userId}`).then((response) => {
      setContactos(response.data);
    })
    // Revisar cuando va actuar este useeffect, que sea cuando cargue el usuario
  }, []);



  return (
    <div>
      <h1>Contactos</h1>
      {contactos.map((contacto) => <ContactCard key={contacto.id}  nombre={contacto.nombre} mail={contacto.mail} telefono={contacto.telefono}/>)}
    </div>
  )
}

export default Contactos