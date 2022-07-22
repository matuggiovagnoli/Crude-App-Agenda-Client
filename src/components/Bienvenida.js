import React from 'react'
import "./Bienvenida.css"
import {Formik, Field} from 'formik'
import axios from 'axios'

const Bienvenida = () => {
  return (
    <div className='page'>
        <h1 className='saludo'>BIENVENIDO A TU NUEVA AGENDA DIGITAL</h1>
        <div className='form_container'>
            <div className='login'>
                <h3 className='login_title'>LOGIN</h3>
                <label className='login_label'>Usuario: </label>
                <input className='login_input' type="text"></input>
                <label className='login_label'>Contraseña: </label>
                <input className='login_input' type="password"></input>
                <button className='button_welcom'>Ingresar</button>
            </div>
            <div className='register'>
                <h3 className='register_title'>REGISTRATE </h3>
                <label className='login_label'>Usuario: </label>
                <input className='login_input' type="text"></input>
                <label className='login_label'>E-mail: </label>
                <input className='login_input' type="email"></input>
                <label className='login_label'>Contraseña: </label>
                <input className='login_input' type="password"></input>
                <label className='login_label'>Confirmar contraseña: </label>
                <input className='login_input' type="password"></input>
                <button className='button_welcom'>Registrarse</button>
            </div>
            <h5>GitHub: https://github.com/matuggiovagnoli</h5>
        </div>
        <div className='caracteristicas'>
            <div className='contactos'>
                <h3>Contactos</h3>
            </div>
            <image></image>
            <div className='calendario'>
                <h3>Calendario</h3>
            </div>
            <div className='posts'>
                <h3>Post It</h3>
            </div>
        </div>
    </div>
  )
}

export default Bienvenida