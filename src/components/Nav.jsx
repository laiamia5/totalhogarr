import React from "react";
import '../styles/Nav.css'
import {Link} from 'react-router-dom'

export default function Nav () {
    return(
        <div className="Nav_contenedor">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/servicio-tecnico'><li>servicio tecnico</li></Link>
                <Link to='/admin'><li>admin</li></Link>
                <Link to='/login'><li>login</li></Link>
                <Link to='/profile'><li>profile</li></Link>
            </ul>
        </div>
    )
}