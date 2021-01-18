import {
    GET_PROMO_SUCCESS
} from './promoActions';

const initialState = {
    promosList : []
}

const promosReducer = ( state=initialState, action) => {
    switch(action.type) {
        case GET_PROMO_SUCCESS: {
            const promos = action.payload.promos;
            
            return {
                ...state,
                promosList: promos,
            }
        }
        default: 
            return state;
    }
}

export default promosReducer;