// import React from "react";
import mail from "../../pics/google.png"
import face from '../../pics/face.png'
import '../../styles/login.css'
import Signup from './signup'
import '../../pics/circulos.png'
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router"
import { obtenerUsuario } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { logearUsuario } from "../../redux/actions"

export default function Login(){

    const navegate = useNavigate()
    const dispatch = useDispatch()
    const usuarioo = useSelector(state => state.token)
    const [clase, setClase] = useState('aside animacion_signup')
    const [input, setInput] = useState({
        email: '',
        contraseña: ''
    })
    const [loading, setLoading] = useState(false)

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
        navegate('/profile')

        // setTimeout(() => {
        //     navegate('/profile')
        // }, 3000)
    }

    return(
        <div style={{display: "flex"}} className='contenedor_login_absoluto_todo'>
            <div className={clase}>
                <button className="botonesAnimation" onClick={() => animaciones('login')}>iniciar sesion</button>
                <button className="botonesAnimation" onClick={() => animaciones('signup')}> registrarse </button>
                <button className="botonesAnimation" onClick={() => navegate('/')}>inicio</button>
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
                        {loading === false 
                        ? <button className="login_button_ingresa" onClick={() =>{ 
                            peticion();
                            setLoading(true)
                            }}>INICIA</button>  
                        :   (
                            <div class="load-3">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                            )
                        }
                       
                    </div>
                </div> 
            )}

        </div>
    )
}



