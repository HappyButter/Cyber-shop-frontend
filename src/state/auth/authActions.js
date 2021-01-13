import axios from '../../axios-config.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const login = ( { email, password } ) => async dispatch => {
    axios.post('/users/login', {email, password})
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