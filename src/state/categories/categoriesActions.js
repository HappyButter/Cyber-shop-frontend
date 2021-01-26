import axios from '../../axios-config.js';

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';

export const getAllCategories = () => async dispatch => {
    axios.get('/categories')
        .then(res => {
            dispatch({
                type : GET_ALL_CATEGORIES_SUCCESS,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_ALL_CATEGORIES_FAILURE,
                payload : err.message
            })
        })
}