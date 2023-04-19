import axios from 'axios'
export const TODOS_PRODUCTOS = 'TODOS_PRODUCTOS';
export const LOGEAR_USUARIO = 'LOGEAR_USUARIO';
export const LOGOUT_USUARIO = 'LOGOUT_USUARIO';
export const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO';
export const ELIMINAR_DEL_CARRITO = 'ELIMINAR_DEL_CARRITO'
export const ELIMINAR_CANTIDAD_DEL_CARRITO = 'ELIMINAR_CANTIDAD_DEL_CARRITO'
export const VACIAR_CARRITO = 'VACIAR_CARRITO'
export const AUMENTAR_CANTIDAD_DEL_CARRITO = 'AUMENTAR_CANTIDAD_DEL_CARRITO'

export const TodosLosProductos = () => async (dispatch) => {
    return fetch(`http://localhost:3001/productos`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:TODOS_PRODUCTOS, payload: data})
    })
    .catch((err) => console.log(err))
}

export const logearUsuario = (usuario) => async (dispatch) => {
    return dispatch({type:LOGEAR_USUARIO, payload: usuario})
}

export const logoutUsuario = () => async (dispatch) => {
    return dispatch({type:LOGOUT_USUARIO, payload: {} })
}


export const agregarAlCarrito = (id) => async (dispatch) => {
    return dispatch({type:AGREGAR_AL_CARRITO, payload: id })
}

export const eliminarDelCarrito = (id) => async (dispatch) => {
    return dispatch({type: ELIMINAR_DEL_CARRITO, payload: id })
}

export const vaciarCarrito = () => async (dispatch) => {
    return dispatch({type: VACIAR_CARRITO, payload: 'algo' })
}

export const eliminarCantidadDelCarrito = (id) => async (dispatch) => {
    return dispatch({type: ELIMINAR_CANTIDAD_DEL_CARRITO, payload: id })
}

export const aumentarCantidadDelCarrito = (id) => async (dispatch) => {
    return dispatch({type: AUMENTAR_CANTIDAD_DEL_CARRITO, payload: id })
}
