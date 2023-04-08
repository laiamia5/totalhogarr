import React, { useEffect , useState} from "react";
import axios from "axios"

export default function UsuariosAdmin(){

    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/usuarios/compras')
        .then((res) => {
           setLista(res.data) 
           console.log(lista)
        })
        .catch((err) => console.log(err))
    }, [])


    return(
        <div style={{display: "flex"}}>
            {lista?.map((e, index) => {
               return(
                    <div key={index} style= {{width: '200px', height: '200px', backgroundColor: 'blue', marginLeft: "20px", marginTop: "20px"}}>
                        <p>nombre: {e.nombre}</p>
                        <p>apellido: {e.apellido}</p>
                        <p>compras: {e.compras.length}</p>
                        <p>email: {e.email}</p>
                        <p>DNI {e.dni}</p>
                    </div>
               ) 
            })}
        </div>
    )
}