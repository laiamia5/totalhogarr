import React from "react";
import '../styles/login.css'
import mail from "../pics/gmail.png"

export default function Login(){
    return(
        <>
            <h1 className="login_titulo">Inicia sesion</h1>
            <div className="login_center">
                <button className="login_button">
                    <img src={ mail } alt="" />
                </button>
                <button className="login_button"></button>
                <button className="login_button"></button>
                <p>o usa tu mail para logearte</p>
                <div className="login_contenedor_inputs">
                    <input type="text" className="login_input" placeholder="✉  Email" />
                    <input type="text" className="login_input" placeholder="🔒︎  Contraseña"/>
                </div>
                <p>olvidaste tu contraseña?</p>
                <button className="login_button_ingresa">INICIA</button>
                <faCalendar />
                
            </div>

        </>
    )
}

