import {
    TODOS_PRODUCTOS,
    LOGEAR_USUARIO, 
    LOGOUT_USUARIO, 
    AGREGAR_AL_CARRITO, 
    ELIMINAR_DEL_CARRITO,
    VACIAR_CARRITO
} from './actions'

let storage = localStorage.getItem('carrito')

const initialState = {
    todos: [],
    token: {},
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
        default :
            return state
        }
}

export default reducer;