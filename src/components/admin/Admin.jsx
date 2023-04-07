import React, { useEffect, useState } from "react";
import CreateProd from "./CreateProd";
import RegistroAdmin from './RegistroAdmin'
import '../../styles/admin.css'

export default function Admin (){

    const [clases , setClases] = useState(true)

    return(
        <>
            <div className="admin_contenedor_botones">
                <button onClick={() => setClases(true)}>crear productos</button>
                <button onClick={() => setClases(false)}>pedidos</button>
                <button onClick={() => setClases(false)}>usuarios</button>
            </div>
            {clases === true ? <CreateProd/> : <RegistroAdmin/> }
            {/* <RegistroAdmin/> */}
            
        </>
    )
}