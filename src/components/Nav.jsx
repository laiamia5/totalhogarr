import React, { useEffect , useState} from "react";
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import lupa from '../pics/lupa.png'
import perfil from '../pics/perfil2.png'
import corazon from '../pics/corazon2.png'
import carrito from '../pics/carrito.png'
import logo from '../pics/logo5.png'
import { useSelector } from 'react-redux'

export default function Nav () {
    const carr = useSelector(state => state.carrito)
    const [carrLength, setCarrLength ]= useState(carr.length)

   useEffect(() => {
    console.log(carr)
    setCarrLength(carr.length)
   }, [carr])

    return(
        <div className="Nav_contenedor">
            <div className='contenedor_searchbar'>
                <img src={logo} className="nav_logo" />
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/admin'><li>admin</li></Link>
                    <Link to='/inicio-sesion'><li>login</li></Link>
                </ul>
                <input className="searchbar_input" type="text" placeholder="buscar..." />
                <button>
                    <img src={lupa} style={{width: "20px", height: "20px", filter: 'brightness(5%)' }}/>
                </button>
                <Link to='/profile'><img className= 'searchbar_icons_perfil ' src={perfil} style={{width: "20px", height: "20px"}}/></Link>
                <img className= 'searchbar_icons_corazon ' src={corazon} style={{width: "20px", height: "20px"}}/>
                <Link to='/carrito'><img className= 'searchbar_icons_carrito' src={carrito} style={{width: "20px", height: "20px"}}/></Link>
                {carrLength !== 0 && 
                <span style={{backgroundColor: 'red', width: '20px', height: '20px', borderRadius: '50%', color:'white', paddingLeft: '5px'}}>{carrLength}</span>
                }
            </div>
        </div>
    )
}