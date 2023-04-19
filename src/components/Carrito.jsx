import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { eliminarDelCarrito , vaciarCarrito, eliminarCantidadDelCarrito, aumentarCantidadDelCarrito} from "../redux/actions";
import FormCarrito from './FormCarrito'
import axios from 'axios'
import '../styles/carrito.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Carrito (){
    let dispatch = useDispatch()
    let carrito = useSelector(state => state.carrito)
    let productos = useSelector(state => state.todos)
    let [carritoCompleto, setCarritoCompleto] = useState([])
    let [finalizar, setFinalizar] = useState(false)
    let [compra, setCompra] = useState([])
    const [preferenceId, setPreferenceId] = useState(null)
    let [nose, setNose] = useState(false)

    useEffect(() => {
        let eso = productos.filter(prod => carrito.find( e => e === prod.id))
        for (const i of eso){
            let cantidades = carrito.filter((ele) => ele == i.id).length
            if( cantidades > 1 ){
                i.cantidad = cantidades
            }else{
                i.cantidad = 1
            }
        }
        setCarritoCompleto(eso)
        setNose(false)
        localStorage.setItem("carrito", carrito)
    }, [nose])

    const eliminarProd = async (id) => {
        if(carrito.filter((ele) => ele == id ).length > 1 ){
                setNose(true)
                dispatch(eliminarCantidadDelCarrito(id))
        }else{
                setCarritoCompleto(carritoCompleto.filter((e) => e.id !== id)) ;
                dispatch(eliminarDelCarrito(id));
        } 
        
    }

    const sumarProd = (id) => {
        dispatch(aumentarCantidadDelCarrito(id))
        setNose(true)
    }

    const enviarCompra = async () => {
        let user = sessionStorage.getItem('sesion')
        if(user){
            let arre = []
            await carritoCompleto.forEach((e) => {
                const compra = {
                    productoId: e.id,
                    cantidad: e.cantidad,
                    usuarioId: 'de42c762-ac8e-4646-b1b3-b4be7dd383eb'
                }
                arre.push(compra)
            })
            setCompra(arre)
    
            axios.post(`http://localhost:3001/pagar`)
            .then((res) => setPreferenceId(res.data))
            .catch((err) => alert("Unexpected error"))
            setFinalizar(true)
        }else{
            const showToastMessage = () => {
                toast.error('inicia sesión en tu cuenta para realizar la compra', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
            showToastMessage()
        } 
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
                        <p style={{color: 'red'}}>cantidad: {e.cantidad}</p>
                        disponibles: <p style={{color: 'red'}}>{e.stock}</p>
                        <button onClick={() => eliminarProd(e.id)} className="card_carrito_button">-</button>
                        <button onClick={() => sumarProd(e.id)} className="card_carrito_button">+</button>
                        <p className="card_carrito_precio">${e.precio}</p>
                    </div>
                   
                   )
                })}
                TOTAL: {
                    carritoCompleto.map((e) => e.precio * e.cantidad).reduce((A, B) => A + B, 0)
                }
                <button className="card_carrito_finalizar" onClick={() => {
                    enviarCompra();
                    }}>finalizar compra</button>
                <button onClick={() => dispatch(vaciarCarrito())}>vaciar carrito</button>
                <ToastContainer />
            </div>
        )
    }else{
        return(
           <div>
                {preferenceId
                ? <FormCarrito style={{ position: 'absolute'}} preferenceId={preferenceId} compra={compra}/>
                : <p style={{color: 'black'}}>cargando . . .</p>
                }
                <ToastContainer />
           </div> 
        )
    }
        
    
 
 
}