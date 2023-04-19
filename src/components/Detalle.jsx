import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles/detalle.css'
import {Link} from 'react-router-dom'

export default function Detalle (){
    const [prod, setProd] = useState({})
    const {prodId} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/productos/${prodId}`)
        .then((res) => setProd(res.data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <div className="contenedor_detalle">
          <Link to='/'>atras -</Link>  
          <br />
          nombre: {prod?.nombre}
          <br />
          precio: {prod?.precio}
          <br />
            categoria: {prod?.categoria}
            <br />
            descripcion: {prod?.descripcion}
            <br />
            marca: {prod?.marca}
            <br />
            stock: {prod?.stock}
        </div>
    )
}