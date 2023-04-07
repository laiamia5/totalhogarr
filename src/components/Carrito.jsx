import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { eliminarDelCarrito } from "../redux/actions";
import '../styles/carrito.css'

export default function Carrito (){
    let dispatch = useDispatch()
    let carrito = useSelector(state => state.carrito)
    let productos = useSelector(state => state.todos)
    let [carritoCompleto, setCarritoCompleto] = useState([])

    useEffect(() => {
        let eso = productos.filter(prod => carrito.find( e => e === prod.id))
        setCarritoCompleto(eso)
    }, [])

    const eliminarProd = (id) => {
        dispatch(eliminarDelCarrito(id))
        setCarritoCompleto(carritoCompleto.filter((e) => e.id !== id))
    }

    const realizarPedido = () => {

    }

    return(
        <>
            {carritoCompleto.map((e, index) => {
               return (
                <div key={index} className="contenedor_card_carrito">
                    <img src={e.img} alt="imagen" className="card_carrito_img"/>
                    <strong> {e.nombre }</strong>
                    <p className="card_carrito_precio">${e.precio}</p>
                    <p>{e.categoria}</p>
                    <p>cantidad: {e.cantidad}</p>
                    disponibles: <p style={{color: 'red'}}>{e.stock}</p>
                    <button onClick={() => eliminarProd(e.id)} className="card_carrito_button">eliminar</button>
                </div>
               
               )
            })}
            TOTAL: {carritoCompleto.map((e) => e.precio).reduce((A, B) => A + B, 0)}
            <button className="card_carrito_finalizar" onClick={() => realizarPedido()}>finalizar compra</button>
        </>
    )
}