import { LOADING, SET_VACANT_APARTMENTS } from '../actions'

const initialState = {
    loading: false,
    vacantApartments: null
}

const apartment = (state = initialState, action) => {
    switch(action.type){
        case LOADING: 
            return {
                ...state,
                loading: true
            }
        case SET_VACANT_APARTMENTS:
            return {
                vacantApartments: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default apartment