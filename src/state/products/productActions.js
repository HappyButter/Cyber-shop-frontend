import axios from '../../axios-config.js';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';


export const createProduct = ( { name, price } ) => {
    return {
        type: CREATE_PRODUCT,
        payload: {
            name, 
            price,
        }
    }
}

export const deleteProduct = ( productId ) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId,
        }
    }
}


export const getAllProducts = () => async dispatch => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
      payload: {},
    })
  
    axios.get('/products')
      .then(data => {
        console.log(data);
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: {
            posts: data.data
          },
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          payload: {
            message: err.message
          },
        })
      });
  }