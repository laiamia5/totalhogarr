import React, { useEffect, useState } from "react";
import CreateProd from "./CreateProd";
import RegistroAdmin from './RegistroAdmin'
import UsuariosAdmin from "./UsuariosAdmin";
import '../../styles/admin.css'

export default function Admin (){

    const [clases , setClases] = useState(1)

    if(clases === 1){
        return(
            <>
                <div className="admin_contenedor_botones">
                    <button onClick={() => setClases(1)}>crear productos</button>
                    <button onClick={() => setClases(2)}>pedidos</button>
                    <button onClick={() => setClases(3)}>usuarios</button>
                </div>
                <CreateProd/>
            </>
        )
    }else if(clases === 2){
        return(
            <>
                <div className="admin_contenedor_botones">
                    <button onClick={() => setClases(1)}>crear productos</button>
                    <button onClick={() => setClases(2)}>pedidos</button>
                    <button onClick={() => setClases(3)}>usuarios</button>
                </div>
                <RegistroAdmin/>
            </>
        )
    }else{
        return(
            <>
                <div className="admin_contenedor_botones">
                    <button onClick={() => setClases(1)}>crear productos</button>
                    <button onClick={() => setClases(2)}>pedidos</button>
                    <button onClick={() => setClases(3)}>usuarios</button>
                </div>
                <UsuariosAdmin/>
            </>
        )
    }
        
}