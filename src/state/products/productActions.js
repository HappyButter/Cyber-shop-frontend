import axios from '../../axios-config.js';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';

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


export const createProduct = ({ name, price }) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      name,
      price,
    }
  }
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