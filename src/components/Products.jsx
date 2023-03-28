import React from "react";
import { useSelector } from "react-redux";

export default function Products (){

    const productos = useSelector((state) =>  state.todos)

    return(
        <div style={{display: 'flex', marginTop: "50px"}}>
            {productos.map((e, index) => {
                return(
                    <div key={index} style={{border: "1px solid black", width: '200px', height: '200px', marginLeft: "30px"}}>
                        <h3>{e.nombre}</h3>
                        <p>{e.marca !== null && e.marca}</p>
                        <strong>{e.precio}</strong>
                        <ul>{e.descripcion.split(',').map((el) => {
                            return <li>{el}</li>
                        })}</ul>
                    </div>
                )
            })}
        </div>
    )
}