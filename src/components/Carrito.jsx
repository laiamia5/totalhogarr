import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { eliminarDelCarrito } from "../redux/actions";

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

    return(
        <>
            carrito va aca {carritoCompleto.map((e, index) => {
               return (
                <div key={index} style={{border: '1px solid black'}}>
                    <strong> {e.nombre }</strong>
                    <p style={{color: 'blue'}}>{e.precio}</p>
                    <p>{e.categoria}</p>
                    disponibles: <p style={{color: 'red'}}>{e.stock}</p>
                    <button onClick={() => eliminarProd(e.id)}>eliminar</button>
                </div>
               
               )
            })}
        </>
    )
}