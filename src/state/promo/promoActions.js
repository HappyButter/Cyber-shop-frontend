import axios from '../../axios-config.js';

export const GET_PROMO_SUCCESS = 'GET_PROMO_SUCCESS';
export const GET_PROMO_FAILURE = 'GET_PROMO_FAILURE';
export const GET_PROMO_REQUEST = 'GET_PROMO_REQUEST';

export const CREATE_PROMO_SUCCESS = 'CREATE_PROMO_SUCCESS';
export const CREATE_PROMO_FAILURE = 'CREATE_PROMO_FAILURE';

export const SET_TO_EDIT_PROMO = 'SET_TO_EDIT_PROMO';

export const EDIT_PROMO_SUCCESS = 'EDIT_PROMO_SUCCESS';
export const EDIT_PROMO_FAILURE = 'EDIT_PROMO_FAILURE';

export const DELETE_PROMO_SUCCESS = 'DELETE_PROMO_SUCCESS';
export const DELETE_PROMO_FAILURE = 'DELETE_PROMO_FAILURE';


export const deletePromo = ({id, enqueueSnackbar}) => async dispatch => {
  axios.delete(`/promos/delete/${id}`)
    .then(res => {
      const message='Usunięto promocję';  
      enqueueSnackbar(
        message, {
            variant: 'success',
        }
      );

      dispatch({
        type: DELETE_PROMO_SUCCESS,
        payload : id,
      })
    })
    .catch(err => {
      const message='Usunięcie promocji przebiegło niepomyślnie. Sprawdź połączenie internetowe i spróbuj ponownie.';  
      enqueueSnackbar(
      message, {
          variant: 'error',
      }
    );

      dispatch({
        type: DELETE_PROMO_FAILURE,
        payload: {
          message: err.message
        },
      })
    })
} 

export const editPromo = ({ id, title, description, discountValue, enqueueSnackbar }) => async dispatch => {
  axios.post(`/promos/update/${id}`, { title, description, discount:discountValue })
    .then(res => {
      const message='Szczegóły promocji zostały zaktualizowane';  
      enqueueSnackbar(
        message, {
            variant: 'success',
        }
      );

      dispatch({
        type : EDIT_PROMO_SUCCESS,
        payload : res.data,
      })
    })
    .catch(err => {
      const message='Aktualizacja promocji nie powiodła się';  
      enqueueSnackbar(
        message, {
            variant: 'error',
        }
      );

      dispatch({
        type: EDIT_PROMO_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}

export const setToEditionPromo = (promo) => {
  return {
    type : SET_TO_EDIT_PROMO,
    payload : promo
  }
}

export const createPromo = ({ title, description, discountValue, enqueueSnackbar }) => async dispatch => {
  axios.put('/promos/create', { title, description, discount:discountValue })
    .then(res => {
      const message='Dodano nową promocję. Przejdź do sekcji "Zarządzaj produktami" by dodać produkt do promocji.';  
      enqueueSnackbar(
        message, {
            variant: 'success',
        }
      );

      dispatch({
        type : CREATE_PROMO_SUCCESS,
        payload : res.data,
      })
    })
    .catch(err => {
      const message='Tworzenie promocji nie powiodło się';  
      enqueueSnackbar(
        message, {
            variant: 'error',
        }
      );

      dispatch({
        type: CREATE_PROMO_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}

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