export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REDUCE_PRODUCT_QUANTITY_FROM_CART = 'REDUCE_PRODUCT_QUANTITY_FROM_CART';
export const ADD_ADDRESS = 'ADD_ADDRESS';


export const CLEAR_CART = 'CLEAR_CART';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

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
