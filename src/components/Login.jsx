// import React from "react";
import mail from "../pics/google.png"
import face from '../pics/face.png'
import '../styles/login.css'
import Signup from './signup'
import '../pics/circulos.png'
import React, { useState } from 'react';
import axios from 'axios'

export default function Login(){

    const [clase, setClase] = useState('aside animacion_signup')
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const animaciones = (val) => {
        if(val === 'login') {
            setClase('aside animacion_login')
        }
        else {
            setClase('aside animacion_signup')
        }
    }

    const peticion = () => {
        axios.post('http://localhost:3001/users/signin', input)
        .then((res) => {
            console.log(res.data)
            let convertir = JSON.stringify(res.data.id)
            localStorage.setItem('usuario', convertir)
        })
        .catch((err) => alert(err.response.data))
    }


    return(
        <div style={{display: "flex"}}>
            <div className={clase}>
                <button style={botonesAnimation} onClick={() => animaciones('login')}>iniciar sesion</button>
                <button style={botonesAnimation}  onClick={() => animaciones('signup')}> registrarse </button>
            </div>
            {clase === 'aside animacion_signup' ? (
                <Signup />
            ) : (
                <div className="contenedor_absoluto_login">
                    <h1 className="login_titulo">Inicia sesión</h1>
                    <div className="login_center">
                        <button className="login_button primer_button">
                            <img src={ mail } alt="" />
                        </button>
                        <button className="login_button ">
                            <img src={ face } alt="" />
                        </button>
                        <p className="login_p_mail">o usa tu mail para iniciar sesión</p>
                        <div className="login_contenedor_inputs">
                            <input type="text" className="login_input" placeholder="✉  Email" onChange={(e) => setInput({...input, email: e.target.value})}/>
                            <input type="password" className="login_input" placeholder="🔒︎  Contraseña" onChange={(e) => setInput({...input, contraseña: e.target.value})}/>
                        </div>
                        <p className="login_p_contraseña">olvidaste tu contraseña?</p>
                        <button className="login_button_ingresa" onClick={() => peticion()}>INICIA</button>  
                    </div>
                </div> 
            )}

        </div>
    )
}



const botonesAnimation = {width: "100px", height: "30px"}
