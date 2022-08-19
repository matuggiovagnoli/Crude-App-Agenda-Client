import React, { useState } from 'react'
import { Navigate} from "react-router-dom";
import "./Bienvenida.css"
import {Formik, Field} from 'formik'
import axios from 'axios'



const Bienvenida = () => {

    const [body, setBody] = useState({ email: '', contraseña:'' })
    const [user, setUser] = useState({})
    

    const inputChange = ({target}) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]:value
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        let res = await axios.post('http://localhost:3001/api/users/login', {
            email: body.email,
            contraseña: body.contraseña
              });
              setUser(res.data)
              console.log(user)
    }


  return (
    <div className='page'>
        <h1 className='saludo'>BIENVENIDO A TU NUEVA AGENDA DIGITAL</h1>
        <div className='form_container'>
            <form className='login'
                onSubmit={handleSubmit}
            >
                <h3 className='login_title'>LOGIN</h3>
                <div className='login_user'>
                    <label>E-mail: </label>
                    <input 
                    type="text"
                    name='email' 
                    value={body.email}
                    onChange={inputChange}
                    />
                </div>
                <div className='login_password'>
                    <label>Contraseña: </label>
                    <input 
                    type="password" 
                    name='contraseña'
                    value={body.contraseña}
                    onChange={inputChange}
                    />
                </div>
                <button className='button_welcom' type='submit'>Login</button>
            </form>
            <Formik
            // state de formik
                initialValues={{
                    usuario:'',
                    mail:'',
                    contraseña:'',
                    confirmar:''

                }}
                // Validaciones de formik
                validate={(valores) => {

                    let errores = {};

                    if(!valores.usuario){
                        errores.usuario = 'Porfavor ingresa un nombre de usuario!.'
                    }

                    if(!valores.mail){
                        errores.mail = 'Porfavor ingresa un correo de Email!.'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test (valores.mail)){
                        errores.mail = "El Email solo puede tener: letras, numeros, puntos, guines y guion bajo."
                    }

                    if(!valores.contraseña){
                        errores.contraseña = 'Porfavor ingresa una contraseña!.'
                    } else if(!/^.{4,12}$/.test (valores.contraseña)){
                        errores.contraseña = "La contraseña debe de tener como minimo 4 caracteres y maximo 12."
                    }

                    if(!valores.confirmar){
                        errores.confirmar = 'Porfavor ingresa la contraseña.'
                    } else if(valores.confirmar !== valores.contraseña){
                        errores.confirmar = "La contraseña debe ser igual a la ingresada."
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm}) => {
                    // resetear el formulario
                    resetForm();
                    // Enviamos el registro del usuario

                    axios.post('http://localhost:3001/api/users/register', {
                        username: valores.usuario,
                        email: valores.mail,
                        contraseña: valores.contraseña
                    }).then(() => {
                        console.log('Formulario enviado.')
                    })
                }}
            >
                {({values, touched, errors, handleSubmit, handleChange, handleBlur}) => (

                <form className='register_form' onSubmit={handleSubmit}>
                    <h3 className='register_title'>REGISTRATE </h3>
                    <div className='register_user'>
                        <label>Usuario: </label>
                        <input 
                            type="text" 
                            id='usuario' 
                            name='usuario'
                            value={values.usuario}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.usuario && errors.usuario && <p className='error'>{errors.usuario}</p>}
                    </div>
                    <div className='register_mail'>
                        <label>E-mail: </label>
                        <input 
                            type="email" 
                            id='mail' 
                            name='mail'
                            value={values.mail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.mail && errors.mail && <p className='error'>{errors.mail}</p>}
                    </div>
                    <div className='register_password'>
                        <label >Contraseña: </label>
                        <input 
                            type="text" 
                            id='contraseña' 
                            name='contraseña'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.contraseña && errors.contraseña && <p className='error'>{errors.contraseña}</p>}
                    </div>
                    <div className='register_confirm'>
                        <label>Confirmar contraseña: </label>
                        <input 
                            type="text" 
                            id='confirmar' 
                            name='confirmar'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.confirmar && errors.confirmar && <p className='error'>{errors.confirmar}</p>}
                    </div>
                    <button className='register_button' type='submit'>Registrarse</button>
                </form>
                )}
            </Formik>
            <h5 className='git'>GitHub: https://github.com/matuggiovagnoli</h5>
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