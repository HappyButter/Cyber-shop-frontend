import { 
    GET_ALL_ORDERS_DETAILS_SUCCES,
    GET_ORDERS_DETAILS_SUCCES,
    UPDATE_PAYMENT_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_SUCCESS
} from './ordersActions';

const initialState = []

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ORDER_STATUS_SUCCESS: {
            const {status, orderId} = action.payload;
            
            const currentState = state.filter(order => parseInt(order.order_id) !== parseInt(orderId));
            let updated = state.find(order => parseInt(order.order_id) === parseInt(orderId));
            updated.orderStatus = status;

            return [...currentState, updated];
        }
        case UPDATE_PAYMENT_STATUS_SUCCESS: {
            const {isPaid, orderId} = action.payload;
            
            const currentState = state.filter(order => parseInt(order.order_id) !== parseInt(orderId));
            let updated = state.find(order => parseInt(order.order_id) === parseInt(orderId));
            updated.isPaid = isPaid;

            return [...currentState, updated];
        }
        case GET_ALL_ORDERS_DETAILS_SUCCES :
        case GET_ORDERS_DETAILS_SUCCES : {
            return action.payload
        }default: {
            return state;
        }
    }
}

export default ordersReducer;