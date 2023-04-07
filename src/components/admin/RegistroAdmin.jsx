import React, { useEffect , useState} from "react";
import axios from "axios";

export default function RegistroAdmin(){

  const [estado , setEstado ]= useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/carrito/comprar')
        .then((res) => {
            setEstado(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    console.log(estado) 

    return(
        <div style={{display: "flex"}}>
        ddddddddddddddddddddddddd
            {estado?.map((e, index) => {
            return(
                <div key={index} style={{backgroundColor: 'black', marginLeft: '20px', width: "200px", height: "200px"}}>
                    <h3>pedido</h3>
                    <p>cantidad: {e.cantidad}</p>
                        <p>direccion: {e.direccion}</p>
                        <p>producto: {e.producto.nombre}</p>
                        <p> cliente: {e.usuario.nombre}</p> 
                        <p> entrega : {e.entrega}</p>
                        <p> pago : {e.pago}</p>
                </div>
                )
                
            })}
        </div> 
    
)}