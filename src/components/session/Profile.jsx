import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { logoutUsuario } from "../../redux/actions";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Profile (){
    const dispatch = useDispatch()
    const navegate = useNavigate()
   const token = useSelector( state => state.token )
   const [datos, setDatos] = useState(token)
   let iniciado = JSON.parse(sessionStorage.getItem('sesion'))

    useEffect(() => {
        if(!iniciado){
            axios.get(`http://localhost:3001/usuarios/profile/${token.id}`,
            {headers: {
                authorization: `bearer ${token.token}`,
                }})
            .then((res) => {
                console.log(res.data)
                setDatos(res.data)
            })
            .catch((err) =>{ 
                console.log(err.response.data)
                console.log(token)
            })
        }else{
            setDatos(iniciado)
        }
       
    }, [token])


    return(
        <>
            profileeeeeeeeeeeeee de 
            <h1>{datos?.nombre}</h1>
            <h2>{datos?.apellido}</h2>
            <h2>{datos?.email}</h2>
            <button onClick={() => {
                dispatch(logoutUsuario());
                sessionStorage.removeItem('sesion')
                console.log(token)
                navegate('/inicio-sesion')
                }}>
                cerrar sesion
            </button>
            <Link to='/editar-perfil'>editar perfil</Link>
        </>
    )
}