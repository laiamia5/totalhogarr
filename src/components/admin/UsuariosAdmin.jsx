import React, { useEffect , useState} from "react";
import axios from "axios"
import '../../styles/usuariosAdmin.css'

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
        <div style={{display: "flex"}} className="contenedor_usuarios_admin">
            {lista?.map((e, index) => {
               return(
                    <div key={index} className="contenedor_card_usuarios">
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