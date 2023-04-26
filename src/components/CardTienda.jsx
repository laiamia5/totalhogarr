import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardTienda (props){
    const {cantidad, categoria, descripcion, id , img, marca, nombre, precio, stock} = props.elementos

    const dispatch = useDispatch()

    const agregarCarr = (ide) => {
        dispatch(agregarAlCarrito(ide))
    }

    const showToastMessage = () => {
        toast.success('producto agregado al carrito!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return(
        <div class="col-md-4" key={id}>
            <ToastContainer />
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <div style={{maxHeight: '250px', overflow: "hidden", height: "250px"}}>
                                    <img class="card-img rounded-0 img-fluid" src={img}/>
                                </div>
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                        <li>
                                            <Link to={`/detalle/${props.elementos.id}`}>
                                                <a class="btn btn-success text-white mt-2">
                                                    <i class="far fa-eye">
                                                    </i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li onClick={() => {
                                            agregarCarr(id);
                                            showToastMessage();
                                        }}>
                                            <a class="btn btn-success text-white mt-2" >
                                                <i class="fas fa-cart-plus">
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <div style={{maxHeight: '30px', overflow: 'hidden'}}>
                                   <a href="shop-single.html"  class="h3 text-decoration-none"><strong>{nombre}</strong> </a>
                                </div>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0" style={{maxHeight: '55px', overflow: 'hidden'}}>
                                    <li>{descripcion}
                                    </li>
                                    <li class="pt-2">
                                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p class="text-center mb-0">$ {precio}</p>
                            </div>
                        </div>
        </div>
    )
}