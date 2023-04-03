import React, { useEffect } from "react";
import './InicioSesion.css'
import {useState} from 'react'
import { useNavigate } from "react-router"
import { obtenerUsuario } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { logearUsuario } from "../../redux/actions"

export default function InicioSesion (){
    //--------ANIMACION SIGNIN SIGNUP----------------------------------------
    
    const [clases, setClases] = useState('container')
    const cambioClase = () => {
        clases === 'container' ?  setClases('container right-panel-active') : setClases('container')
    }
    //-------------LOGEO----------------------------------------------------------
    const navegate = useNavigate()
    // let usuarioo = useSelector(state => state.token)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        email: '',
        contraseña: ''
    })
    //poner la opcion en profile de cerrar sesion
    //si estoy logeado y pongo la personita que entre a mi perfil, si no estoy logeado que me lleve a iniciar sesion
    const peticion = async () => {
       let peti = dispatch(logearUsuario(input))
       console.log(peti)
        // setTimeout(() => {
        //     if(Object.keys().length !== 0){
        //         navegate('/profile') 
        //     } 
        // }, 2000)
    }

    return(
        <div className="body_inicioSesion">

        <div class={clases} id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={(e) => setInput({...input, email: e.target.value})}/>
                    <input type="password" placeholder="Password" onChange={(e) => setInput({...input, contraseña: e.target.value})}/>
                    <a href="#">Forgot your password?</a>
                    <button type='button' onClick={() => peticion()}>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn" onClick={() => cambioClase()}>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp" onClick={() => cambioClase()}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}