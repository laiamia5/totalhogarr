import React, { useEffect , useState} from "react";
import axios from "axios";
import '../../styles/pedidosAdmin.css'

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
        <div style={{display: "flex", marginTop: "40px", flexWrap: 'wrap'}}>
            {estado?.map((e, index) => {
            return(
                <div key={index} className="contenedor_registro_card">
                    <p>cliente: {e.usuario?.nombre}{e.usuario?.apellido ? e.usuario?.apellido : ' '}</p> 
                    <p>producto: {e.producto?.nombre}</p>
                    <p>cantidad: {e.cantidad}</p>
                    <p>entrega : {e.entrega}</p>
                    <p>pago : {e.pago}</p>
                    <p>pedido: {e.id}</p>
                    <p>fecha : {e.createdAt.substr(0, 10)}</p>
                    <div className="admin_span" style={e.entrega == "pendiente" ? {backgroundColor: "red"} : {backgroundColor: "green"} }></div>
                </div>
                )
                
            })}
        </div> 
    
)}