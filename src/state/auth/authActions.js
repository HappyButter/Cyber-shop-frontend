import axios from '../../axios-config.js';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USER_ACCOUNT_UPDATE_SUCCESS = 'USER_ACCOUNT_UPDATE_SUCCESS';
export const USER_ACCOUNT_UPDATE_FAILURE = 'USER_ACCOUNT_UPDATE_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';



export const submitRegister = ( { name, surname, phoneNumber, email, password, enqueueSnackbar } ) => async dispatch => {
  axios.post('/auth/register', { name, surname, phoneNumber, email, password })
    .then(res => {
      const message=`Witaj w serwisie ${name}!`;  
      enqueueSnackbar(
        message, {
            variant: 'success',
        }
      );
      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      const message='Użytkownik o podanym adresie już istnieje';  
      enqueueSnackbar(
        message, {
          variant: 'error',
        }
      );

      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message
      })
  });
}

export const login = ( { email, password, enqueueSnackbar } ) => async dispatch => {
    axios.post('/auth/login', {email, password})
      .then(res => {
        const message='Witaj ponownie!';  
        enqueueSnackbar(
          message, {
              variant: 'success',
          }
        );
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {      
        const message='Wpisz poprawne dane';  
          enqueueSnackbar(
          message, {
              variant: 'warning',
          }
        );
        
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message
        })
    });
}

export const updateAccountData = ( { name, surname, phoneNumber, userId, enqueueSnackbar } ) => async dispatch => {
  axios.post(`/users/update/${userId}`, { name, surname, phoneNumber })
    .then(res => {
      const message='Zaktualizowano pomyślnie';  
      enqueueSnackbar(
        message, {
            variant: 'success',
        }
      );

      dispatch({
        type: USER_ACCOUNT_UPDATE_SUCCESS,
        payload: { id:userId, name, surname, phoneNumber }
      })
    })
    .catch(err => {
      const message='Niepoprawne dane';  
      enqueueSnackbar(
        message, {
            variant: 'error',
        }
      );

      dispatch({
        type: USER_ACCOUNT_UPDATE_FAILURE,
        payload: err.message
      })
  });
}

export const logout = ({ enqueueSnackbar }) => {
  const message='Okazje czekają ;) Wróć jak najszybciej!';  
  enqueueSnackbar(
    message, {
        variant: 'info',
    }
  );
  return {
    type: LOGOUT_REQUEST
  }
}