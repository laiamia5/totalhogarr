import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { logoutUsuario } from "../../redux/actions";

export default function Profile (){
    const dispatch = useDispatch()
   const token = useSelector( state => state.token )
   const [datos, setDatos] = useState(token)

    useEffect(() => {
        axios.get(`http://localhost:3001/users/profile/${token.id}`,
        {headers: {
            authorization: `bearer ${token.token}`
            }})
        .then((res) => {
            console.log(res.data)
            setDatos(res.data)
        })
        .catch((err) => console.log(err.response.data))
    }, [])


    return(
        <>
            profileeeeeeeeeeeeee de 
            <h1>{datos?.nombre}</h1>
            <h2>{datos?.apellido}</h2>
            <h2>{datos?.email}</h2>
            <button onClick={() => {
                dispatch(logoutUsuario());
                console.log(token)
                }}>
                cerrar sesion
            </button>
        </>
    )
}