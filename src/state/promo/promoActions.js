import axios from '../../axios-config.js';

export const GET_PROMO_SUCCESS = 'GET_PROMO_SUCCESS';
export const GET_PROMO_FAILURE = 'GET_PROMO_FAILURE';
export const GET_PROMO_REQUEST = 'GET_PROMO_REQUEST';

export const getPromos = () => async dispatch => {
    dispatch({
        type: GET_PROMO_REQUEST,
        payload: {},
      })
    
      axios.get('/promos')
        .then(res => {
          dispatch({
            type: GET_PROMO_SUCCESS,
            payload: {
              promos: res.data
            },
          })
        })
        .catch(err => {
          dispatch({
            type: GET_PROMO_FAILURE,
            payload: {
              message: err.message
            },
          })
        });
}