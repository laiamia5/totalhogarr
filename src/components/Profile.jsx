import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";

export default function Profile (){

   const token = useSelector( state => state.token )
   const [datos, setDatos] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3001/users/profile',
        {headers: {
            authorization: `bearer ${token.token}`
            }})
        .then((res) => {
            console.log(res.data)
            setDatos(res.data.nombre)
        })
        .catch((err) => console.log(err.response.data))
    }, [])


    return(
        <>
            profileeeeeeeeeeeeee de 
            <h1>{datos}</h1>
        </>
    )
}