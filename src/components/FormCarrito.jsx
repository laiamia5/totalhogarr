import { useState } from "react";
import { useDispatch } from "react-redux";
import { vaciarCarrito } from "../redux/actions";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-035d8db4-f766-4f9c-a923-c8b1d60b7622')

export default function FormCarrito(props){
    const [preferenceId, setPreferenceId] = useState(null)
    //cambiar del modelo de compras y poner una prop envio setear en true si el usuario quiere pagar 
    //cargo para que se realice el envio o si lo retira en el local
    const dispatch = useDispatch()
    const [lista , setLista] = useState({
        direccion: "",
        usuarioId: ""
    })

    const showToastMessage = () => {
        toast.success('su compra fue realizada de manera exitosamente!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const enviarCompra = async () => {
        let arre = []
        await props.carrito.forEach((e) => {
            const compra = {
            productoId: e.id,
            cantidad: props.cantidad.filter((ele) => ele == e.id ).length ,
            direccion: lista.direccion,
            usuarioId: lista.usuarioId
            }
            arre.push(compra)
        })
        for(const i of arre){
            axios.post('http://localhost:3001/carrito/comprar', i)
        }

        dispatch(vaciarCarrito())

        axios.post(`http://localhost:3001/pagar`)
        .then((res) => setPreferenceId(res.data))
        .catch((err) => alert("Unexpected error"))
    }

    return(
        <div style={{marginTop: "50px", backgroundColor: "lightblue", width: "300px", height: "200px", position: 'absolute'}}>
            <form action="">
                <input style={{marginLeft: "50px"}} type="text" placeholder="direccion" onChange={(e) => setLista({...lista , direccion: e.target.value})}/>
                <input style={{marginLeft: "50px"}} type="text" placeholder="user id" onChange={(e) => {
                    setLista({...lista , usuarioId: e.target.value})
                    console.log(lista)
                    }}/>
                <button style={{marginLeft: "50px"}} type="button" onClick={() => {
                    enviarCompra()
                    showToastMessage()
                    }}>send</button>
            </form>
            <ToastContainer />
            {preferenceId !== null && <Wallet initialization={{ preferenceId: preferenceId }} /> }
        </div>
    )
}