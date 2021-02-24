import axios from '../../axios-config.js';


export const GET_ORDERS_DETAILS_SUCCES = 'GET_ORDERS_DETAILS_SUCCES';
export const GET_ORDERS_DETAILS_FAILURE = 'GET_ORDERS_DETAILS_FAILURE';

export const GET_ALL_ORDERS_DETAILS_SUCCES = 'GET_ALL_ORDERS_DETAILS_SUCCES';
export const GET_ALL_ORDERS_DETAILS_FAILURE = 'GET_ALL_ORDERS_DETAILS_FAILURE';

export const UPDATE_PAYMENT_STATUS_SUCCESS = 'UPDATE_PAYMENT_STATUS_SUCCESS';
export const UPDATE_PAYMENT_STATUS_FAILURE = 'UPDATE_PAYMENT_STATUS_FAILURE'; 

export const UPDATE_ORDER_STATUS_SUCCESS = 'UPDATE_ORDER_STATUS_SUCCESS';
export const UPDATE_ORDER_STATUS_FAILURE = 'UPDATE_ORDER_STATUS_FAILURE'; 


export const updateOrderStatus = ({status, orderId, enqueueSnackbar}) =>  async dispatch => {
    axios.put(`/orders/status/${orderId}`, { status })
        .then(res => {
            const message=`Zmieniono status zamówienia nr ${orderId} na: ${status}!`;  
            enqueueSnackbar(
              message, {
                  variant: 'success',
              }
            );

            dispatch({
                type: UPDATE_ORDER_STATUS_SUCCESS,
                payload: {status, orderId},
            })
        })
        .catch(err => {
            const message='Nie można zmienić statusu zamówienia. Spróbuj ponownie.';  
            enqueueSnackbar(
              message, {
                  variant: 'error',
              }
            );

            dispatch({
                type: UPDATE_ORDER_STATUS_FAILURE, 
            })
        })
}

export const updatePaymentStatus = ({isPaid, orderId, enqueueSnackbar}) => async dispatch => {
    axios.put(`/orders/payment/${orderId}`, { isPaid })
        .then(res => {

            const paymentStatus = isPaid ? 'zapłacono' : 'nie zapłacono'; 
            const message=`Zmieniono status płatności zamówienia nr ${orderId} na: ${paymentStatus}`;  

            enqueueSnackbar(
              message, {
                  variant: 'success',
              }
            );

            dispatch({
                type: UPDATE_PAYMENT_STATUS_SUCCESS,
                payload: {isPaid, orderId},
            })
        })
        .catch(err => {
            const message='Nie zmieniono statusu płatności. Spróbuj ponownie.';  
            enqueueSnackbar(
              message, {
                  variant: 'error',
              }
            );

            dispatch({
                type: UPDATE_PAYMENT_STATUS_FAILURE, 
            })
        })
}


export const getAllOrders = () => async dispatch => {
    axios.get("/orders")
        .then(res => {
            dispatch({
                type : GET_ALL_ORDERS_DETAILS_SUCCES,
                payload: res.data,
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type : GET_ALL_ORDERS_DETAILS_FAILURE,
                message: err.message
            })
        });
}

export const getUserOrders = ({userId}) => async dispatch => {
    axios.get(`/orders/${userId}`)
        .then(res => {
            dispatch({
                type : GET_ORDERS_DETAILS_SUCCES,
                payload: res.data,
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type : GET_ORDERS_DETAILS_FAILURE,
                message: err.message
            })
        });
}