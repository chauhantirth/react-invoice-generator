import {
    CHANGE_ROUTE
} from './types'

const initialState:JState = {
    currentRoute: "/"
}

function reducer(state:JState=initialState, action:actionType){
    switch(action.type){
        case CHANGE_ROUTE:
            return{
                ...state,
                currentRoute:action.payload
            }
        default:
            return state
    }
}

export default reducer;