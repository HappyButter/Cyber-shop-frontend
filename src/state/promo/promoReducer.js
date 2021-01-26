import {
    GET_PROMO_SUCCESS,
    CREATE_PROMO_SUCCESS,
    GET_PROMO_FAILURE,
    SET_TO_EDIT_PROMO,
    EDIT_PROMO_SUCCESS,
    DELETE_PROMO_SUCCESS
} from './promoActions';

const initialState = {
    promosList : [],
    currentlyEdited: {}
}

const promosReducer = ( state=initialState, action) => {
    switch(action.type) {
        case DELETE_PROMO_SUCCESS: {
            const promoId = action.payload;
            const reducedPromoList = state.promosList.filter(promo => promo.id !== promoId);

            return {
                ...state,
                promosList : reducedPromoList,
                currentlyEdited : {}
            }
        }
        case EDIT_PROMO_SUCCESS: {
            const updatedPromo = action.payload;

            const reducedPromoList = state.promosList.filter(promo => promo.id !== updatedPromo.id);

            return {
                ...state,
                promosList : [...reducedPromoList, updatedPromo],
                currentlyEdited : {}
            }
        }
        case SET_TO_EDIT_PROMO: {
            return {
                ...state,
                currentlyEdited: action.payload
            }
        }
        case CREATE_PROMO_SUCCESS: {
            const promo = action.payload;
            return {
                ...state,
                promosList: [...state.promosList, ...promo],
            }
        }
        case GET_PROMO_SUCCESS: {
            const promos = action.payload.promos;
            
            return {
                ...state,
                promosList: promos,
            }
        }
        case GET_PROMO_FAILURE: {
            return {
                promosList : []
            }
        }
        default: 
            return state;
    }
}

export default promosReducer;