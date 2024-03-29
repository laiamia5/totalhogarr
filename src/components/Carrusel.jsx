import React, { useState } from "react";
// import '../styles/Carrusel.css'
import { useDispatch, useSelector } from "react-redux";
import { agregarAlCarrito } from "../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


export default function Carrusel (){

    const showToastMessage = () => {
        toast.success('producto agregado al carrito!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    let dispatch = useDispatch()
    const productos = useSelector((state) =>  state.todos)
  
    const agregarCarr = (id) => {
        dispatch(agregarAlCarrito(id))
    }

    return(
        <div className="contenedor_padre">
            <h1 className="titulo_Carrusel" >celulares a la venta</h1>
            <div className="contenedor_carrusel">
            <ToastContainer />

            {productos.map((e, index) => {
                return(
                        <div className="contenedor_card" key={index}>
                                <img src={e.img} />
                                <hr />
                                <p className="card_categoria">{e.categoria}</p>
                                <div>
                                    <strong className="card_nombre">{e.nombre}</strong>
                                </div>
                                <p className="card_precio">${e.precio}</p>
                                <button onClick={() => {
                                    agregarCarr(e.id)
                                    showToastMessage()
                                    }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="white" d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg></button>
                                <div className="div_display">
                                    {/* <button className="botones_card">añadir al carrito</button> */}
                                    {/* <button className="botones_card">añadir a favoritos</button> */}
                                </div>
                            <Link to={`/detalle/${e.id}`}>
                                    detalle -
                            </Link>
                        </div>
                    
                )
            })}
            </div>
            
        </div>
    )
}