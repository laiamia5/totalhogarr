// import React from "react";
import mail from "../pics/google.png"
import face from '../pics/face.png'
import '../styles/login.css'
import Signup from './signup'
import '../pics/circulos.png'
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router"
import { obtenerUsuario } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { logearUsuario } from "../redux/actions"

export default function Login(){

    const navegate = useNavigate()
    const dispatch = useDispatch()
    const usuarioo = useSelector(state => state.token)
    const [clase, setClase] = useState('aside animacion_signup')
    const [input, setInput] = useState({
        email: '',
        contraseña: ''
    })

    const animaciones = (val) => {
        if(val === 'login') {
            setClase('aside animacion_login')
        }
        else {
            setClase('aside animacion_signup')
        }
    }

    const peticion = async () => {
        dispatch(logearUsuario(input))

        setTimeout(() => {
            navegate('/profile')
        }, 3000)
    }

    return(
        <div style={{display: "flex"}}>
            <div className={clase}>
                <button style={botonesAnimation} onClick={() => animaciones('login')}>iniciar sesion</button>
                <button style={botonesAnimation}  onClick={() => animaciones('signup')}> registrarse </button>
                <button style={botonesAnimation} onClick={() => navegate('/')}>pagina principal</button>
                <button onClick={() => navegate('/profile')}>entrar</button>
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
