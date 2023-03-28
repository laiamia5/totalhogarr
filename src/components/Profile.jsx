import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";

export default function Profile (){

   const token = useSelector( state => state.token )
   const [datos, setDatos] = useState({
        nombre: null,
        apellido: null,
        email: null
   })

    useEffect(() => {
        axios.get(`http://localhost:3001/users/profile/${token.id}`,
        {headers: {
            authorization: `bearer ${token.token}`
            }})
        .then((res) => {
            console.log(res.data)
            setDatos({email: res.data.email, apellido: res.data.apellido, nombre: res.data.nombre})
        })
        .catch((err) => console.log(err.response.data))
    }, [])


    return(
        <>
            profileeeeeeeeeeeeee de 
            <h1>{datos.nombre}</h1>
            <h2>{datos.apellido}</h2>
            <h2>{datos.email}</h2>
        </>
    )
}