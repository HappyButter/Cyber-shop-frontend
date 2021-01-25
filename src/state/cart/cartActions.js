import axios from '../../axios-config.js';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REDUCE_PRODUCT_QUANTITY_FROM_CART = 'REDUCE_PRODUCT_QUANTITY_FROM_CART';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';
export const GET_USER_ADDRESSES_SUCCESS = 'GET_USER_ADDRESSES_SUCCESS';
export const GET_USER_ADDRESSES_FAILURE = 'GET_USER_ADDRESSES_FAILURE';


export const CLEAR_CART = 'CLEAR_CART';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const getUserAddresses = ({userId}) => async dispatch => {
    axios.get(`/addresses/user/${userId}`)
        .then(res => {
            dispatch({
                type: GET_USER_ADDRESSES_SUCCESS,
                payload: res.data
              })
            } 
        )
        .catch(err => {
            dispatch({
                type: GET_USER_ADDRESSES_FAILURE,
                payload: err.message
            })
        })
}


export const placeOrder = ({ userId, cart, clientComments }) => async dispatch => {
    const body = { 
        userId,
        shippmentMethod: cart.address.shippingMethod,
        shippmentPrice: cart.address.shippingValue,
        addressId: (cart.address.addressId === -1 
            ? null 
            : cart.address.addressId),
        country: cart.address.country,
        postcode: cart.address.postcode, 
        city: cart.address.city, 
        street: cart.address.street, 
        building: cart.address.building, 
        apartment: cart.address.apartment,
        productsCost: cart.value, 
        clientComments,
        paymentMethod : cart.payment,
        productList: cart.productList,
     }
     console.log(body);

    axios.post('/orders', body)
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

export const addAdress = ({ addressId, country, postcode, city, street, building, apartment, shippingMethod, shippingValue }) => {
    return {
        type: ADD_ADDRESS,
        payload: { 
            addressId,
            country,
            postcode, 
            city, 
            street, 
            building, 
            apartment,
            shippingMethod, 
            shippingValue,
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
