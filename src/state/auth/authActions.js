import axios from '../../axios-config.js';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = ( { name, surname, phoneNumber, email, password } ) => async dispatch => {
  axios.post('/auth/register', { name, surname, phoneNumber, email, password })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message
      })
  });
}

export const login = ( { email, password } ) => async dispatch => {
    axios.post('/auth/login', {email, password})
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message
        })
    });
}

export const logout = () => {
    return {
      type: LOGOUT_REQUEST,
      payload: null,
    }
  }