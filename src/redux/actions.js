export const TODOS_PRODUCTOS = 'TODOS_PRODUCTOS';
export const CREAR_PRODUCTOS = 'CREAR_PRODUCTOS';
export const CREAR_USUARIO = 'CREAR_USUARIO';

export const TodosLosProductos = () => async (dispatch) => {
    return fetch(`http://localhost:3001/products`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:TODOS_PRODUCTOS, payload: data})
    })
    .catch((err) => console.log(err))
}

