import axios from '../../axios-config.js';


export const GET_ORDERS_DETAILS_SUCCES = 'GET_ORDERS_DETAILS_SUCCES';
export const GET_ORDERS_DETAILS_FAILURE = 'GET_ORDERS_DETAILS_FAILURE';

export const GET_ALL_ORDERS_DETAILS_SUCCES = 'GET_ALL_ORDERS_DETAILS_SUCCES';
export const GET_ALL_ORDERS_DETAILS_FAILURE = 'GET_ALL_ORDERS_DETAILS_FAILURE';

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

export const getUserOrders = (userId) => async dispatch => {
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