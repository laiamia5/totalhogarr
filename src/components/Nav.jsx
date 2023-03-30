import React from "react";
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import lupa from '../pics/lupa.png'
import perfil from '../pics/perfil2.png'
import corazon from '../pics/corazon2.png'
import carrito from '../pics/carrito.png'

export default function Nav () {
    return(
        <div className="Nav_contenedor">
            <div className='contenedor_searchbar'>
                <h1>TOTAL HOGAR</h1>
                <input className="searchbar_input" type="text" placeholder="buscar . . ." />
                <button>
                    <img src={lupa} style={{width: "20px", height: "20px"}}/>
                </button>
                <Link to='/profile'><img className= 'searchbar_icons_perfil ' src={perfil} style={{width: "20px", height: "20px"}}/></Link>
                <img className= 'searchbar_icons_corazon ' src={corazon} style={{width: "20px", height: "20px"}}/>
                <img className= 'searchbar_icons_carrito' src={carrito} style={{width: "20px", height: "20px"}}/>
            </div>
            <hr style={{opacity: "0.5"}}/>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/admin'><li>admin</li></Link>
                <Link to='/login'><li>login</li></Link>
            </ul>
        </div>
    )
}