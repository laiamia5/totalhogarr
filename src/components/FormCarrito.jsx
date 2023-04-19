import { useDispatch } from "react-redux";
import { vaciarCarrito } from "../redux/actions";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-035d8db4-f766-4f9c-a923-c8b1d60b7622')

export default function FormCarrito(props){

    const dispatch = useDispatch()

    const showToastMessage = () => {
        toast.success('su compra fue realizada de manera exitosamente!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const finalizarCompra = () => {
        // for(const i of arre){
        //     axios.post('http://localhost:3001/carrito/comprar', i)
        // }

        dispatch(vaciarCarrito())
    }

    return(
        <div style={{marginTop: "50px", backgroundColor: "white", width: "70%", height: "70%", position: 'absolute', borderRadius: '15px' , marginLeft: '15%', WebkitBoxShadow: '0px 9px 44px -31px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 9px 44px -31px rgba(0,0,0,0.75)',
        boxShadow: '0px 9px 44px -31px rgba(0,0,0,0.75)'}}>  
        <div style={{width: '280px', float: 'right', marginTop: '20px', marginRight: '50px', marginTop: '32%'}}>
            <button style={{width: '100%', height: '45px', borderRadius: '8px', border: 'none', fontSize: '17px', cursor: 'pointer'}} type="button" onClick={() => {
                    showToastMessage()
                }}>pagar en efectivo</button>
                <ToastContainer />
                {props.preferenceId !== null && <Wallet initialization={{ preferenceId: props.preferenceId }} /> }
        </div>    
        </div>
    )
}