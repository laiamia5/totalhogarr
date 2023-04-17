import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { eliminarDelCarrito , vaciarCarrito} from "../redux/actions";
import FormCarrito from './FormCarrito'
import '../styles/carrito.css'

export default function Carrito (){
    let dispatch = useDispatch()
    let carrito = useSelector(state => state.carrito)
    let productos = useSelector(state => state.todos)
    let [carritoCompleto, setCarritoCompleto] = useState([])
    let [pedir, setPedir] = useState(false)

    useEffect(() => {
        let eso = productos.filter(prod => carrito.find( e => e === prod.id))
        setCarritoCompleto(eso)
        console.log(carrito)
    }, [])

    const eliminarProd = (id) => {
        dispatch(eliminarDelCarrito(id))
        setCarritoCompleto(carritoCompleto.filter((e) => e.id !== id))
    }


    if(pedir === false){
        return(
            <div className='contenedor_carrito'>
                {carritoCompleto.map((e, index) => {
                   return (
                    <div key={index} className="contenedor_card_carrito">
                        <img src={e.img} alt="imagen" className="card_carrito_img"/>
                        <strong> {e.nombre }</strong>
                        <p style={{color: 'red'}}>{e.categoria}</p>
                        <p style={{color: 'red'}}>cantidad: {carrito.filter((ele) => ele == e.id).length}</p>
                        disponibles: <p style={{color: 'red'}}>{e.stock}</p>
                        <button onClick={() => eliminarProd(e.id)} className="card_carrito_button">eliminar</button>
                        <p className="card_carrito_precio">${e.precio}</p>
                    </div>
                   
                   )
                })}
                TOTAL: {carritoCompleto.map((e) => e.precio).reduce((A, B) => A + B, 0)}
                <button className="card_carrito_finalizar" onClick={() => setPedir(true)}>finalizar compra</button>
                <button onClick={() => dispatch(vaciarCarrito())}>vaciar carrito</button>
            </div>
        )
    }else{
        return(
            <div>
                <FormCarrito carrito={carritoCompleto} cantidad={carrito}/>
                <button onClick={() => setPedir(false)}>volveral carrito</button>
            </div>
        )
    }
 
}