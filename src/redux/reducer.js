import {TODOS_PRODUCTOS, LOGEAR_USUARIO} from './actions'

const initialState = {
    todos: [],
    token: {}
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
        default :
            return state
        }
}

export default reducer;