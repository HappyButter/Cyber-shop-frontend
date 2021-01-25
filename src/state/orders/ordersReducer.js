import { 
    GET_ALL_ORDERS_DETAILS_SUCCES,
    GET_ORDERS_DETAILS_SUCCES
} from './ordersActions';

const initialState = []

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_ORDERS_DETAILS_SUCCES :
        case GET_ORDERS_DETAILS_SUCCES : {
            return action.payload
        }default: {
            return state;
        }
    }
}

export default ordersReducer;