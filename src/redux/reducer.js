import {
    TODOS_PRODUCTOS,
    LOGEAR_USUARIO, 
    LOGOUT_USUARIO, 
    AGREGAR_AL_CARRITO, 
    ELIMINAR_DEL_CARRITO,
    VACIAR_CARRITO,
    ELIMINAR_CANTIDAD_DEL_CARRITO,
    AUMENTAR_CANTIDAD_DEL_CARRITO
} from './actions'

let storage = localStorage.getItem('carrito')
let sesion = sessionStorage.getItem('sesion')

const initialState = {
    todos: [],
    token: !sesion ? {} : sesion,
    carrito: !storage ? [] : storage.split(',').map((e) => Number(e))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TODOS_PRODUCTOS:
            return{
                ...state,
                todos: action.payload
            }
        case LOGEAR_USUARIO:
            return{
                ...state,
                token: action.payload
            }
        case LOGOUT_USUARIO:
            return{
                ...state,
                token: action.payload
            }
        case AGREGAR_AL_CARRITO: 
            return{
                ...state,
                carrito: [...state.carrito, action.payload]
            }
        case ELIMINAR_DEL_CARRITO:
            return{
                ...state,
                carrito: state.carrito.filter((e) => e !== action.payload )
            }
        case VACIAR_CARRITO:
            return{
                ...state,
                carrito: []
            }
        case ELIMINAR_CANTIDAD_DEL_CARRITO :
            let ese = state.carrito.find((ele) => ele == action.payload )
            let posicionEliminar = state.carrito.indexOf(ese)
            state.carrito.splice(posicionEliminar, 1)
            return{
                ...state,
                carrito: state.carrito
            }
        case AUMENTAR_CANTIDAD_DEL_CARRITO :
            state.carrito.push(action.payload)
            return{
                ...state,
                carrito: state.carrito
            }
        default :
            return state
        }
}

export default reducer;