import axios from '../../axios-config.js';

export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const UPDATE_STORAGE_SUCCESS = 'UPDATE_STORAGE_SUCCESS';
export const UPDATE_STORAGE_FAILURE = 'UPDATE_STORAGE_FAILURE';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';

export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';

export const GET_RECOMMENDED_PRODUCTS_SUCCESS = 'GET_RECOMMENDED_PRODUCTS_SUCCESS';
export const GET_RECOMMENDED_PRODUCTS_FAILURE = 'GET_RECOMMENDED_PRODUCTS_FAILURE';
export const GET_RECOMMENDED_PRODUCTS_REQUEST = 'GET_RECOMMENDED_PRODUCTS_REQUEST';

export const GET_PROMO_PRODUCTS_SUCCESS = 'GET_PROMO_PRODUCTS_SUCCESS';
export const GET_PROMO_PRODUCTS_FAILURE = 'GET_PROMO_PRODUCTS_FAILURE';
export const GET_PROMO_PRODUCTS_REQUEST = 'GET_PROMO_PRODUCTS_REQUEST';

export const GET_CATEGORY_PRODUCTS_REQUEST = 'GET_CATEGORY_PRODUCTS_REQUEST';
export const GET_CATEGORY_PRODUCTS_SUCCESS = 'GET_CATEGORY_PRODUCTS_SUCCESS';
export const GET_CATEGORY_PRODUCTS_FAILURE = 'GET_CATEGORY_PRODUCTS_FAILURE';

export const SET_TO_EDIT_PRODUCT = 'SET_TO_EDIT_PRODUCT'; 



export const setToEditProduct = (product) => {
  return {
    type : SET_TO_EDIT_PRODUCT,
    payload : product,
  }
}

export const updateStorage = ( updateData, enqueueSnackbar ) => async dispatch => {
  axios.put('/orders/storage', {
    userId : updateData.userId,
    title : updateData.title,
    productsCost : updateData.productsCost,
    shippmentPrice : updateData.shippmentPrice,
    id : updateData.id,
    quantity : updateData.quantity,
    price : updateData.price,
  })
  .then(res => {
    const message='Zaktualizowano stan magazynowy produktu';  
    enqueueSnackbar(
      message, {
          variant: 'success',
      }
    );

    dispatch({
        type: UPDATE_STORAGE_SUCCESS,
        payload: {
          quantity: updateData.quantity,
          id : updateData.id,
        }
      })
    })
    .catch(err => {
      const message='Aktualizacja stanu magazynowego nie powiodła się';  
      enqueueSnackbar(
        message, {
            variant: 'error',
        }
      );

      dispatch ({
        type: UPDATE_STORAGE_FAILURE,
        payload: err.message,
      })
    })
}

export const updateProduct = ( productData, enqueueSnackbar ) => async dispatch => {
  axios.post(`/products/update/${productData.id}`, {
    name : productData.name, 
    description : productData.description, 
    price : productData.price,
    profitMargin : productData.profitMargin,  
    producer : productData.producer, 
    warranty : productData.warranty, 
    promo_id : productData.promo_id, 
    category_id : productData.category_id
  })
  .then(res => {
    const message=`Zaktualizowano szczegóły produktu: ${productData.name}!`;  
    enqueueSnackbar(
      message, {
        variant: 'success',
      }
    );

    dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      const message='Aktualizacja szczegółów produktu nie powiodła się';  
      enqueueSnackbar(
        message, {
          variant: 'error',
        }
      );

      dispatch ({
        type: UPDATE_PRODUCT_FAILURE,
        payload: err.message,
      })
    })
}

export const createProduct = ( productData, enqueueSnackbar ) => async dispatch => {
  axios.put('/products/create', {
    name : productData.name, 
    description : productData.description, 
    price : productData.price,
    profitMargin : productData.profitMargin,  
    producer : productData.producer, 
    warranty : productData.warranty, 
    promo_id : productData.promo_id, 
    category_id : productData.category_id
  })
  .then(res => {
    const message=`Dodano nowy produkt: ${productData.name}`;  
    enqueueSnackbar(
      message, {
          variant: 'success',
      }
    );

    dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {      
      const message='Dodawanie produktu nie powiodło się';  
      enqueueSnackbar(
        message, {
            variant: 'error',
        }
      );

      dispatch ({
        type: CREATE_PRODUCT_FAILURE,
        payload: err.message,
      })
    })
}

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId,
    }
  }
}

export const getProductDetails = (productId) => async dispatch => {
  axios.get(`/products/details/${productId}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: {
          productDetails: res.data
        },
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_PRODUCT_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}


export const getAllProducts = () => async dispatch => {
  axios.get('/products/all')
    .then(res => {
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}


export const getPromoProducts = (promoId) => async dispatch => {
  dispatch({
    type: GET_PROMO_PRODUCTS_REQUEST,
    payload: {},
  })

  axios.get(`/products/promo/${promoId}`)
    .then(res => {
      dispatch({
        type: GET_PROMO_PRODUCTS_SUCCESS,
        payload: {
          promoProducts: res.data
        },
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_PROMO_PRODUCTS_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}

export const getRecommendedProducts = () => async dispatch => {
  dispatch({
    type: GET_RECOMMENDED_PRODUCTS_REQUEST,
    payload: {},
  })

  axios.get('/products/recommended')
    .then(res => {
      dispatch({
        type: GET_RECOMMENDED_PRODUCTS_SUCCESS,
        payload: {
          recommended: res.data
        },
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_RECOMMENDED_PRODUCTS_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}

export const getProductsByCategoryId = (categoryId) => async dispatch => {
  dispatch({
    type: GET_CATEGORY_PRODUCTS_REQUEST,
    payload: {},
  })

  axios.get(`/products/category/${categoryId}`)
    .then(res => {
      dispatch({
        type: GET_CATEGORY_PRODUCTS_SUCCESS,
        payload: {
          categoryProducts: res.data
        },
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_CATEGORY_PRODUCTS_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}