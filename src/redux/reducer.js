import {TODOS_PRODUCTOS} from './actions'

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TODOS_PRODUCTOS:
            return{
                todos: action.payload
            }
        default :
            return state
        }
}

export default reducer;