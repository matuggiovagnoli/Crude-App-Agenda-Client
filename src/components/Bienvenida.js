import React, { useState } from 'react'
import { Navigate} from "react-router-dom";
// import "./Bienvenida.css"
import {Formik, Field} from 'formik'
import axios from 'axios'
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { BiErrorAlt } from 'react-icons/bi';




const Bienvenida = () => {
    // Capturamos los inputs en un estado
    const [body, setBody] = useState({ email: '', contraseña:'' })
    const [user, setUser] = useState({})
    
    // Manejamos los cambios de los inputs
    const inputChange = ({target}) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]:value
        })
    };

    // Enviamos info del login al backend
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
    <div className='relative bg-[url("https://img.freepik.com/fotos-premium/espacio-trabajo-plano-mano-mujer-taza-cafe-telefono-inteligente-computadora-cuaderno-agenda-papeleria_139507-102.jpg?w=2000")] bg-cover'>
        
        <div className='relative bg-blue-500 w-1/5 h-screen'>
            <form className='grid grid-cols-1 grid-rows-4 p-5'
                onSubmit={handleSubmit}
            >
                <h3 className='italic text-zinc-300 text-5xl font-bold tracking-wider p-2'>LOGIN</h3>
                <div className='grid grid-cols-3 p-3'>
                    <label className='text-lg italic font-medium'>E-mail: </label>
                    <input className='col-span-2 border-2 border-black shadow-md'
                    type="text"
                    name='email' 
                    value={body.email}
                    onChange={inputChange}
                    />
                </div>
                <div className='grid grid-cols-3 p-3'>
                    <label className='text-lg italic font-medium'>Contraseña: </label>
                    <input className='col-span-2 border-2 border-black shadow-md'
                    type="password" 
                    name='contraseña'
                    value={body.contraseña}
                    onChange={inputChange}
                    />
                </div>
                <button className='bg-black text-white rounded-2xl p-1 px-2 font-bold hover:bg-white hover:text-black ' type='submit'> Login </button>
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
                        errores.usuario = 'Porfavor ingresa un nombre de usuario!'
                    }

                    if(!valores.mail){
                        errores.mail = 'Porfavor ingresa un correo de Email!'
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

                <form className='grid grid-cols-1 grid-rows-4 p-5' onSubmit={handleSubmit}>
                    <h3 className='italic text-zinc-300 text-5xl font-bold tracking-wider mt-10'>REGISTRATE </h3>
                    <div className='pb-4'>
                        <label className='italic font-medium text-lg block p-1'>Usuario </label>
                        <input className='w-80 h-10 border-2 border-black shadow-md'
                            type="text" 
                            id='usuario' 
                            name='usuario'
                            value={values.usuario}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.usuario && errors.usuario && <p className='w-fit p-1 mt-1 rounded-lg font-semibold text-white bg-red-500 '><BiErrorAlt className='w-5 h-5 mr-1 inline'/>{errors.usuario}</p>}
                    </div>
                    <div className='pb-4'>
                        <label className='italic font-medium text-lg block'>E-mail </label>
                        <input className='w-80 h-10 border-2 border-black shadow-md'
                            type="email" 
                            id='mail' 
                            name='mail'
                            value={values.mail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.mail && errors.mail && <p className='w-fit p-1 mt-1 rounded-lg font-semibold text-white bg-red-500'><BiErrorAlt className='w-5 h-5 mr-1 inline'/>{errors.mail}</p>}
                    </div>
                    <div className='pb-4'>
                        <label className='italic font-medium text-lg block'>Contraseña </label>
                        <input className='w-80 h-10 border-2 border-black shadow-md'
                            type="text" 
                            id='contraseña' 
                            name='contraseña'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.contraseña && errors.contraseña && <p className='w-fit p-1 mt-1 rounded-lg font-semibold text-white bg-red-500'><BiErrorAlt className='w-5 h-5 inline mr-1'/>{errors.contraseña}</p>}
                    </div>
                    <div className='pb-4'>
                        <label className='italic font-medium text-lg block'>Confirmar contraseña </label>
                        <input className='w-80 h-10 border-2 border-black shadow-md'
                            type="text" 
                            id='confirmar' 
                            name='confirmar'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.confirmar && errors.confirmar && <p className='w-fit p-1 mt-1 rounded-lg font-semibold text-white bg-red-500'><BiErrorAlt className='w-5 h-5 mr-1 inline'/>{errors.confirmar}</p>}
                    </div>
                    <button className='bg-black text-white rounded-2xl p-1 px-2 font-bold hover:bg-white hover:text-black ' type='submit'>Registrarse</button>
                </form>
                )}
            </Formik>
            <div className='absolute bottom-0 left-0 inline'>
                <h5 className='text-sm m-2'><BsGithub className='w-7 h-7 mr-2 inline'/>GitHub: https://github.com/matuggiovagnoli</h5>
                <h5 className='text-sm m-2'><GrLinkedin className='w-6 h-6 mr-2 inline'/>Linkedin: www.linkedin.com/in/matias-daniel-gómez-giovagnoli-00b703177</h5>
            </div>
        </div>
        <div className='absolute flex left-1/3 bottom-0'>
            <div className='m-10 h-60 w-80 opacity-20 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-5 duration-500 hover:border-2 hover:border-black bg-[url("https://img.freepik.com/premium-photo/concept-contact-us-blank-wooden-cubes-square-dice-with-symbol-email-telephone-address-placed-wood-background_44868-1254.jpg?w=2000")] bg-cover bg-right'>
                <h3 className='font-bold text-xl w-20'>CONTACTOS</h3>
            </div>
            <div className='m-10 h-60 w-80 opacity-20 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-5 duration-500 hover:border-2 hover:border-black bg-[url("https://thumbs.dreamstime.com/b/red-pin-event-calendar-background-close-up-time-red-pin-event-calendar-background-close-up-time-149540392.jpg")] bg-cover'>
                <h3 className='font-bold  text-xl w-20'>CALENDARIO</h3>
            </div>
            <div className='m-10 h-60 w-80 opacity-20 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-5 duration-500 hover:border-2 hover:border-black bg-[url("https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdCUyMGl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80")] bg-cover'>
                <h3 className='font-bold  text-xl w-20'>POST IT</h3>
            </div>
        </div>
    </div>
  )
}

export default Bienvenida