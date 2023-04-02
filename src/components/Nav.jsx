import React from "react";
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import lupa from '../pics/lupa.png'
import perfil from '../pics/perfil2.png'
import corazon from '../pics/corazon2.png'
import carrito from '../pics/carrito.png'
import logo from '../pics/logo4.png'

export default function Nav () {
    return(
        <div className="Nav_contenedor">
            <div className='contenedor_searchbar'>
                <img src={logo} className="nav_logo" />
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/admin'><li>admin</li></Link>
                    <Link to='/login'><li>login</li></Link>
                </ul>
                <input className="searchbar_input" type="text" placeholder="buscar..." />
                <button>
                    <img src={lupa} style={{width: "20px", height: "20px"}}/>
                </button>
                <Link to='/profile'><img className= 'searchbar_icons_perfil ' src={perfil} style={{width: "20px", height: "20px"}}/></Link>
                <img className= 'searchbar_icons_corazon ' src={corazon} style={{width: "20px", height: "20px"}}/>
                <img className= 'searchbar_icons_carrito' src={carrito} style={{width: "20px", height: "20px"}}/>
            </div>
            <hr style={{opacity: "0.5", marginTop: '10px'}}/>
            <div style={{overflow: 'hidden'}}>
                <div className="nav_contenedor_mini_carru">
                    <div className="nav_mini_carrusel">
                        - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares 
                    </div>
                    <div className="nav_mini_carrusel">
                        !!!- 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares 
                    </div>
                    <div className="nav_mini_carrusel">
                        !!!- 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares 
                    </div>
                    <div className="nav_mini_carrusel">
                        !!!- 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares 
                    </div>
                    <div className="nav_mini_carrusel">
                        !!!- 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares reacondicionados - envios en el dia - 25% OFF para jubilados - celulares 
                    </div>   
                </div>
            </div>
            
            
        </div>
    )
}