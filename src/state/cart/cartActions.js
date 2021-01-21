import axios from '../../axios-config.js';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REDUCE_PRODUCT_QUANTITY_FROM_CART = 'REDUCE_PRODUCT_QUANTITY_FROM_CART';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';
export const ADD_CLIENT_COMMENTS = 'ADD_CLIENT_COMMENTS';

export const CLEAR_CART = 'CLEAR_CART';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';


export const addClientComments = ({ clientComments }) => {
    return {
        type: ADD_CLIENT_COMMENTS,
        payload: clientComments,
    }
}

export const placeOrder = ({ userId, addressData, productList, paymentMethod, costs, clientComments }) => async dispatch => {
    axios.post('/orders', { 
        userId,
        country: addressData.country,
        postcode: addressData.postcode, 
        city: addressData.city, 
        street: addressData.street, 
        building: addressData.building, 
        apartment: addressData.apartment,
        productsCost: costs.productsValue, 
        shippmentPrice: costs.shippmentPrice, 
        clientComments,
        paymentMethod,
        productList: productList,
     })
      .then(res => {
        dispatch({
          type: PLACE_ORDER_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: PLACE_ORDER_FAILURE,
          payload: err.message
        })
    });
  }

export const addPaymentMethod = ({paymentMethod}) => {
    return {
        type: ADD_PAYMENT_METHOD,
        payload: paymentMethod,
    }
}

export const addAdress = ({ country, postcode, city, street, building, apartment, shippingMethod }) => {
    return {
        type: ADD_ADDRESS,
        payload: { 
            country,
            postcode, 
            city, 
            street, 
            building, 
            apartment,
            shippingMethod, 
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const addProductToCart = ({ productId, productName, price }) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: {
            productId,
            productName,
            price,
        }
      }
}
export const removeProductFromCart = ({ productId }) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: {
            productId,
        }
    }
}

export const reduceProductQuantityFromCart = ({ productId }) => {
    return {
        type: REDUCE_PRODUCT_QUANTITY_FROM_CART,
        payload: {
            productId,
        }
    }
}
