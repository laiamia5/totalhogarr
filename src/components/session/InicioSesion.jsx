import React, { useEffect } from "react";
import './InicioSesion.css'
import {useState} from 'react'
import { useNavigate } from "react-router"
import { obtenerUsuario } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { logearUsuario } from "../../redux/actions"
import axios from 'axios'

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

    //si estoy logeado y pongo la personita que entre a mi perfil, si no estoy logeado que me lleve a iniciar sesion
    const peticion = async () => {
       axios.post(`http://localhost:3001/usuarios/signin`, input)
       .then((res) => {
            dispatch(logearUsuario(res.data))
            setTimeout(() => {
                navegate('/profile')
            }, 2000)
       })
       .catch((err) => alert(err.response.data))
    }


    //-----------------------------REGISTRO--------------------------------
    //hacer formulario controlado
    const [registro, setRegistro] = useState({
        email: "",
        contraseña: "",
        nombre: "",
        dni: 1234567
    })
    
    const handleRegistro = async () => {
        if(registro.email !== ""){
            axios.post('http://localhost:3001/usuarios/signup', registro )
            .then((res) =>{ 
                console.log(res.data)
            })
            .catch((err) => alert(err.response.data)) 
        }else{
            alert('debe completar todos los campos con las condiciones que se especifican')
        }
    }

    return(
        <div className="body_inicioSesion">

        <div class={clases} id="container">
            <div class="form-container sign-up-container">
                <form action="#"  onSubmit={handleRegistro}>
                    <h1>Crea tu cuenta</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                    <span>o usa tu email para registrarte</span>
                    <input type="text" placeholder="Nombre" onChange={(e) =>  setRegistro({...registro, nombre: e.target.value})}/>
                    <input type="email" placeholder="Email" onChange={(e) =>  setRegistro({...registro, email: e.target.value})} />
                    <input type="password" placeholder="Contraseña" onChange={(e) =>  setRegistro({...registro, contraseña: e.target.value})}/>
                    <button>Registrarse</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form>
                    <h1>Inicia sesion</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                    <span>o utiliza tu cuenta</span>
                    <input type="email" placeholder="Email" onChange={(e) => setInput({...input, email: e.target.value})}/>
                    <input type="password" placeholder="Contraseña" onChange={(e) => setInput({...input, contraseña: e.target.value})}/>
                    <a href="#">Olvidaste tu contraseña?</a>
                    <button type='button' onClick={() => peticion()}>Inicia</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn" onClick={() => cambioClase()}>Inicia sesion</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp" onClick={() => cambioClase()}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}