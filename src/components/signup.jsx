import React from "react"
import '../styles/login.css'
import mail from "../pics/google.png"
import face from '../pics/face.png'
import {useState} from 'react'
import axios from 'axios'

export default function Signup (){
    
    const [form , setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contraseña: ''
    })

    const setearForm = (prop, value) => {
        switch(prop){
            case 'nombre': 
                setForm({...form, nombre: value})
                break;
            case 'apellido':
                setForm({...form, apellido: value})
                break;
            case 'email':
                setForm({...form, email: value})
                break;
            case 'contraseña':
                setForm({...form, contraseña: value})
                break;
            default :
                break;
        }
    }

    let vaciar = () =>{
        document.getElementsByClassName("login_input")[0].value = "";
        document.getElementsByClassName("login_input")[1].value = "";
        document.getElementsByClassName("login_input")[2].value = "";
        document.getElementsByClassName("login_input")[3].value = "";
    }

    const [correccion , setCorreccion] = useState({
        nombre: null,
        apellido: null,
        email: null,
        contraseña: null
    })

    let MayMin = () => {

        let respuesta = ''
        for (const i in form.contraseña){
            if (form.contraseña[i] == form.contraseña[i].toUpperCase()){ 
                respuesta = respuesta + 'S'

            }else if (form.contraseña[i] == form.contraseña[i].toLowerCase()){ 
                respuesta = respuesta + 'I'
            }
        }
       if(respuesta.includes('S') && respuesta.includes('I')){
            setCorreccion({...correccion, contraseña: true})
       }
       else {
            setCorreccion({...correccion, contraseña: null})
       }

    }

    let verificar = (prop) => {
        switch(prop){
            case 'nombre':
                if(form.nombre.length > 20) {
                    setCorreccion({...correccion, nombre: null})
                    return 'solo se permite un maximo de 20 letras'
                }
                if(form.nombre.length < 2) {
                    setCorreccion({...correccion, nombre: null})
                    return 'se permite un minimo de 2 letras'
                }
                setCorreccion({...correccion, nombre: true})
                console.log(correccion)
                return true
            case 'apellido':
                if(form.apellido.length  >= 20){ 
                    setCorreccion({...correccion, apellido: null})
                    return 'solo se permite un maximo de 20 letras'
                }
                if(form.apellido.length  < 2){ 
                    setCorreccion({...correccion, apellido: null})
                    return 'se permite un minimo de 2 letras'
                }
                setCorreccion({...correccion, apellido: true})
                return true
            case 'email':
                let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                if(emailRegex.test(form.email)) {
                    setCorreccion({...correccion, email: true})
                    return true
                }else{
                    setCorreccion({...correccion, email: null})
                    return 'se espera un email'
                }
            case 'contraseña' : 
                if(form.contraseña.length  >= 25){ 
                    setCorreccion({...correccion, contraseña: null})
                    return 'solo se permite un maximo de 25 caracteres'
                }
                if(form.contraseña.length < 7){ 
                    setCorreccion({...correccion, contraseña: null})
                    return 'se solicita un minimo de 8 caracteres'
                }
                if(form.contraseña.length > 7 && form.contraseña.length <= 25){
                    MayMin()
                    return true
                }
                //falta agregar que contenga numeros
                //y que solo si todos los valores de correccion sean true se realice la peticion
            }
        }
    

    const sendForm = async () => {
        if(form.email !== '' && form.contraseña !== '' && form.nombre !== '' && form.apellido !== ''){
            axios.post('http://localhost:3001/users/signup', form )
            .then((res) => alert(res.data))
            .catch((err) => alert(err.response.data)) 
        }
    }

    return(
        <div className='contenedor_absoluto_signup'>
            <h1 className="signup_titulo">crear cuenta</h1>
            <div>
                <button className="login_button primer_button">
                    <img src={ mail } alt="" />
                </button>
                <button className="login_button">
                    <img src={ face } alt="" />
                </button>
                <p className="login_p_mail">o usa tu mail para registrarte</p>
                <div className="login_contenedor_inputs">
                    <input type="text" className={ correccion.nombre == null ? 'login_input_error': 'login_input'} placeholder="✿  Nombre" onChange={(e) =>{ 
                        setearForm('nombre', e.target.value)
                        verificar('nombre')
                        }}/>
                    <input type="text"  className={ correccion.apellido == null ? 'login_input_error': 'login_input'}  placeholder="✿  Apellido" onChange={(e) => {
                        setearForm('apellido', e.target.value)
                        verificar('apellido')
                        }}/>
                    <input type="text" className={ correccion.email == null ? 'login_input_error': 'login_input'} placeholder="✉  Email" onChange={(e) =>{ 
                        setearForm('email', e.target.value)
                        verificar('email')
                        }}/>
                    <input type="password"  className={ correccion.contraseña == null ? 'login_input_error': 'login_input'} placeholder="🔒︎  Contraseña" onChange={(e) =>{ 
                        setearForm('contraseña', e.target.value)
                        verificar('contraseña')
                        }}/>
                </div>
                <button className="login_button_ingresa" onClick={() => {
                    sendForm()
                    vaciar()
                    }}>INICIA</button>
            </div>
        </div>
    )
}

let estilo = {border: '1px solid red'}