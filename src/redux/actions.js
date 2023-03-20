export const TODOS_PRODUCTOS = 'TODOS_PRODUCTOS';
export const CREAR_PRODUCTOS = 'CREAR_PRODUCTOS'

export const TodosLosProductos = () => async (dispatch) => {
    return fetch(`http://localhost:3001`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:TODOS_PRODUCTOS, payload: data})
    })
    .catch((err) => console.log(err))
}

