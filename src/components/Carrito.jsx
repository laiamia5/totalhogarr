import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { eliminarDelCarrito , vaciarCarrito} from "../redux/actions";
import FormCarrito from './FormCarrito'
import axios from 'axios'
import '../styles/carrito.css'

export default function Carrito (){
    let dispatch = useDispatch()
    let carrito = useSelector(state => state.carrito)
    let productos = useSelector(state => state.todos)
    let [carritoCompleto, setCarritoCompleto] = useState([])
    let [finalizar, setFinalizar] = useState(false)
    let [compra, setCompra] = useState([])
    const [preferenceId, setPreferenceId] = useState(null)

    useEffect(() => {
        let eso = productos.filter(prod => carrito.find( e => e === prod.id))
        setCarritoCompleto(eso)
        console.log(carrito)
    }, [])

    const eliminarProd = (id) => {
        dispatch(eliminarDelCarrito(id))
        setCarritoCompleto(carritoCompleto.filter((e) => e.id !== id))
    }

    const enviarCompra = async () => {
        let arre = []
        await carritoCompleto.forEach((e) => {
            const compra = {
                productoId: e.id,
                cantidad: carrito.filter((ele) => ele == e.id ).length ,
                usuarioId: 'de42c762-ac8e-4646-b1b3-b4be7dd383eb'
            }
            arre.push(compra)
        })
        setCompra(arre)

        axios.post(`http://localhost:3001/pagar`)
        .then((res) => setPreferenceId(res.data))
        .catch((err) => alert("Unexpected error"))
    }

    if(finalizar !== true){
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
                <button className="card_carrito_finalizar" onClick={() => {
                    enviarCompra();
                    setFinalizar(true)
                    }}>finalizar compra</button>
                <button onClick={() => dispatch(vaciarCarrito())}>vaciar carrito</button>
            </div>
        )
    }else{
        return(
           <div>
                {preferenceId
                ? <FormCarrito style={{ position: 'absolute'}} preferenceId={preferenceId} compra={compra}/>
                : <p style={{color: 'black'}}>cargando . . .</p>
                }
           </div> 
        )
    }
        
    
 
 
}