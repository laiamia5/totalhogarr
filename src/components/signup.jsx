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

    const sendForm = async () => {
        if(form.email !== '' && form.contraseña !== '' && form.nombre !== '' && form.apellido !== ''){
            
            axios.post('http://localhost:3001/users/signup', form )
            .then((res) => alert(res.data))
            .catch((err) => alert(err.response.data))
           
        }
    }

    let vaciar = () =>{
        document.getElementsByClassName("login_input")[0].value = "";
        document.getElementsByClassName("login_input")[1].value = "";
        document.getElementsByClassName("login_input")[2].value = "";
        document.getElementsByClassName("login_input")[3].value = "";
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
                    <input type="text" className="login_input" placeholder="✿  Nombre" onChange={(e) => setearForm('nombre', e.target.value)}/>
                    <input type="text" className="login_input" placeholder="✿  Apellido" onChange={(e) => setearForm('apellido', e.target.value)}/>
                    <input type="text" className="login_input" placeholder="✉  Email" onChange={(e) => setearForm('email', e.target.value)}/>
                    <input type="password" className="login_input" placeholder="🔒︎  Contraseña" onChange={(e) => setearForm('contraseña', e.target.value)}/>
                </div>
                <button className="login_button_ingresa" onClick={() => {
                    sendForm()
                    vaciar()
                    }}>INICIA</button>
            </div>
        </div>
    )
}
