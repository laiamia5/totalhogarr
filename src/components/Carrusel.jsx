import React from "react";
import '../styles/Carrusel.css'
import { useSelector } from "react-redux";


export default function Carrusel (){

    const productos = useSelector((state) =>  state.todos)

    return(
        <div className="contenedor_padre">
            <h1 className="titulo_Carrusel">celulares a la venta</h1>


            <div className="contenedor_carrusel">

            {productos.map((e, index) => {
                return(
                    <div className="contenedor_card" key={index}>
                        <p className="card_categoria">{e.categoria}</p>
                        <div>
                            <strong className="card_nombre">{e.nombre}</strong>
                        </div>
                        <img src={e.img} />
                        <p className="card_precio">$30.000</p>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="white" d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg></button>
                        <div className="div_display">
                            <hr />
                            <p>🤍Añadir a la lista de deseos</p>
                        </div>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}