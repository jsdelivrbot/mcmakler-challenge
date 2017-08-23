import axios from 'axios'

// Types
export const SET_VACANT_APARTMENTS = 'SET_VACANT_APARTMENTS'
export const LOADING = 'LOADING'

// Thunks
export const getVacantApartments = () => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios.get('https://api.mcmakler.de/v1/advertisements')
            .then((apartments) => {
                const vacantApartments = apartments.data.data.slice(0, 10)
                dispatch({ type: SET_VACANT_APARTMENTS, payload: vacantApartments })
            })
    }
}