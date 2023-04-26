import React, { useEffect , useState} from "react";
// import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import lupa from '../pics/lupa.png'
import perfil from '../pics/perfil2.png'
import corazon from '../pics/corazon2.png'
import carrito from '../pics/carrito.png'
import logo from '../pics/esta.jpeg'
import { useSelector } from 'react-redux'

export default function Nav () {
    const carr = useSelector(state => state.carrito)
    const [carrLength, setCarrLength ]= useState(carr.length)

   useEffect(() => {
    console.log(carr)
    setCarrLength(carr.length)
   }, [carr])

   let iniciado = JSON.parse(sessionStorage.getItem('sesion'))

    // return(
    //     <div className="Nav_contenedor">
    //         <div className='contenedor_searchbar'>
    //             <ul>
    //                 <Link to='/'><li>Home</li></Link>
    //                 <Link to='/admin'><li>admin</li></Link>
    //                 <li>categorias</li>
    //             </ul>
    //             {/* <input className="searchbar_input" type="text" placeholder="buscar..." /> */}
    //             {/* <button>
    //                 <img src={lupa} style={{width: "20px", height: "20px", filter: 'brightness(5%)' }}/>
    //             </button> */}
    //             <img src={logo} className="nav_logo" />

    //             <Link to={!iniciado ? '/inicio-sesion' : '/profile'}><img className= 'searchbar_icons_perfil ' src={perfil} style={{width: "20px", height: "20px"}}/></Link>
    //             <img className= 'searchbar_icons_corazon ' src={corazon} style={{width: "20px", height: "20px"}}/>
    //             <Link to='/carrito'><img className= 'searchbar_icons_carrito' src={carrito} style={{width: "20px", height: "20px"}}/></Link>
    //             {carrLength !== 0 && 
    //             <span style={{backgroundColor: 'red', width: '20px', height: '20px', borderRadius: '50%', color:'white', paddingLeft: '5px'}}>{carrLength}</span>
    //             }
    //         </div>
    //     </div>
    // )


    return(
        // <!-- Start Top Nav -->
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div>
                        <i class="fa fa-envelope mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none" Target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfnbWkVtMfJJCFRnKKGVnfRKgZXbDlBfqFmcbkdXVHnKCSvFZGmxgNCXzhKPxFrQssScgV">totalhogar2020@gmail.com</a>
                        <i class="fa fa-phone mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="https://api.whatsapp.com/send?phone=5491150024217&text=Hola%20Adrian!%20tengo%20una%20consulta..." Target="_blank" >+54 9 11 5002 4217</a>
                    </div>
                    <div>
                        <a class="text-light" href="https://www.facebook.com/totalhogar.pilar" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://www.instagram.com/totalhogarpilar/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    </div>
                </div>
            </div>
        </nav>
        {/* // <!-- Close Top Nav --> */}
    
    
        {/* // <!-- Header --> */}
        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container d-flex justify-content-between align-items-center">
    
                <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
                    Total Hogar
                </a>
    
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                    <div class="flex-fill">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li class="nav-item">
                                <Link to='/'><a>Inicio</a></Link>
                            </li>
                            <li class="nav-item">
                               <Link to='/sobre-nosotros'><a>Sobre Nosotros</a></Link>
                            </li>
                            <li class="nav-item">
                               <Link to='/tienda'><a>Tienda</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar align-self-center d-flex">
                        <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div class="input-group">
                                <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                                <div class="input-group-text">
                                    <i class="fa fa-fw fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                            <i class="fa fa-fw fa-search text-dark mr-2"></i>
                        </a>
                        <Link to='/carrito'>
                            <a class="nav-icon position-relative text-decoration-none">
                                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a>
                        </Link>
                        <a class="nav-icon position-relative text-decoration-none" href="#">
                            <i class="fa fa-fw fa-user text-dark mr-3"></i>
                            {/* <!-- <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> --> */}
                        </a>
                    </div>
                </div>
    
            </div>
        </nav>
    </div>
    )
}