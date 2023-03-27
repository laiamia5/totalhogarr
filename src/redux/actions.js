import axios from 'axios'
export const TODOS_PRODUCTOS = 'TODOS_PRODUCTOS';
export const LOGEAR_USUARIO = 'LOGEAR_USUARIO';

export const TodosLosProductos = () => async (dispatch) => {
    return fetch(`http://localhost:3001/products`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:TODOS_PRODUCTOS, payload: data})
    })
    .catch((err) => console.log(err))
}

export const logearUsuario = (usuario) => async (dispatch) => {
    axios.post(`http://localhost:3001/users/signin`, usuario)
    .then((res) => {
        return dispatch({type:LOGEAR_USUARIO, payload: res.data})
    })
    .catch((err) => console.log(err))
}

