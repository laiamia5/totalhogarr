import React, { useState } from "react";
import axios from 'axios'
import '../styles/create.css'

export default function CreateProd (){

    const [input , setInput] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        descripcion: '',
        marca: '',
        stock: '',
    })
    const handleSubmit = async (e) => { 
        // e.preventDefault()
        await axios.post('http://localhost:3001/products', input)
        //obtener el ultimo elemento del modelo products
    }
    const control = () => {
        console.log(input)
    }
    return(
        <>
        <h1 className="create_titulo">crear producto</h1>
            <form className='create_form'action="" style={display}>
                <input type="text" placeholder="producto" onChange={(e) => setInput({...input, nombre: e.target.value})}/>
                <input type="number" placeholder="precio"  onChange={(e) => setInput({...input, precio:  Number(e.target.value)})}/>
                <select class="form-select" aria-label="Default select example"   onChange={(e) => setInput({...input, categoria: e.target.value})}>
                    <option selected>selecciona una categoria</option>
                    <option value="Celulares Nuevos">Celulares Nuevos</option>
                    <option value="Celulares Reacondicionados">Celulares Reacondicionados</option>
                    <option value="Licuadora">Licuadora</option>
                    <option value="Horno Electrico">Horno Electrico</option>
                    <option value="Plancha de pelo">Plancha de pelo</option>
                    <option value="Plancha">Plancha</option>
                    <option value="Auriculares">Auriculares</option>
                    <option value="Lavarropas">Lavarropas</option>
                </select>
                <input type="number" placeholder="stock" onChange={(e) => setInput({...input, stock: Number(e.target.value) })}/>
                <input type="text" placeholder="marca" onChange={(e) => setInput({...input, marca: e.target.value})}/>
                <textarea placeholder="descripcion, recuerda poner una coma luego de cada caracteristica de otra forma no se tomara como una lista" onChange={(e) => setInput({...input, descripcion: e.target.value})}></textarea>
                <button onClick={() => {
                control();
                handleSubmit();
                }}  >enviar</button>
            </form>

            

        </>
    )
}

const display = {display: 'flex', flexWrap: 'wrap'}
const textarea = {width: "200px", height: "200px",  resize: 'none', marginTop: '20px'}

