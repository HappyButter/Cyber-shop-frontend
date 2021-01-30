import axios from '../../axios-config.js';

export const SET_TO_EDIT_PRODUCT_IN_SERVICE = 'SET_TO_EDIT_PRODUCT_IN_SERVICE'; 

export const GET_PRODUCTS_IN_SERVICE_SUCCESS = 'GET_PRODUCTS_IN_SERVICE_SUCCESS';
export const GET_PRODUCTS_IN_SERVICE_FAILURE = 'GET_PRODUCTS_IN_SERVICE_FAILURE';

export const ADD_PRODUCT_TO_SERVICE_SUCCESS = 'ADD_PRODUCT_TO_SERVICE_SUCCESS';
export const ADD_PRODUCT_TO_SERVICE_FAILURE = 'ADD_PRODUCT_TO_SERVICE_FAILURE';

export const PRODUCT_IN_SERVICE_STATUS_UPDATE_SUCCESS = 'PRODUCT_IN_SERVICE_STATUS_UPDATE_SUCCESS';
export const PRODUCT_IN_SERVICE_STATUS_UPDATE_FAILURE = 'PRODUCT_IN_SERVICE_STATUS_UPDATE_FAILURE';



export const setToEditProductInService = ({product}) => {
    return {
        type : SET_TO_EDIT_PRODUCT_IN_SERVICE,
        payload : product,
    }
}

export const getProductsInService = () => async dispatch => {
    axios.get('/service')
    .then(res => {
        dispatch({
            type : GET_PRODUCTS_IN_SERVICE_SUCCESS,
            payload : res.data
        })
    })
    .catch(err => {
        dispatch({
            type : GET_PRODUCTS_IN_SERVICE_FAILURE 
        })
    })
}

export const addProductToService = ({ orderLineId, description, status }) => async dispatch => {
    axios.put('/service/create', { orderLineId, description, status })
        .then(res => {
            dispatch({
                type : ADD_PRODUCT_TO_SERVICE_SUCCESS,
                payload : res.data
            })
        })
        .catch(err => {
            alert("Produkt jest już w serwisie lub jego okres gwarancji wygasł");
            dispatch({
                type : ADD_PRODUCT_TO_SERVICE_FAILURE 
            })
        })
}

export const updateProductStatusInService = ({ serviceId, description, status }) => async dispatch => {
    console.log({ serviceId, description, status });
    axios.post(`/service/update/${serviceId}`, { description, status })
        .then(res => {
            dispatch({
                type : PRODUCT_IN_SERVICE_STATUS_UPDATE_SUCCESS,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : PRODUCT_IN_SERVICE_STATUS_UPDATE_FAILURE 
            })
        })
}

