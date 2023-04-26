import React from "react";
import axios from 'axios'
import { useState } from "react";

export default function ConfigProfile (props){

    let usuario = JSON.parse(sessionStorage.getItem('sesion')) 

    const handleForm = () => {
        axios.put(`http://localhost:3001/usuarios/${usuario.id}`, )
    }
    return(
        <div>
            <form action="">
                no
            </form>
        </div>
    )
}