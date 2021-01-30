import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REDUCE_PRODUCT_QUANTITY_FROM_CART,
    CLEAR_CART,
    ADD_ADDRESS,
    ADD_PAYMENT_METHOD,
    PLACE_ORDER_SUCCESS,
    GET_USER_ADDRESSES_SUCCESS
} from './cartActions'; 


const initialState = {
    productList : JSON.parse(localStorage.getItem('cart')) || [],
    value : parseFloat( localStorage.getItem('value') || 0.0 ).toFixed(2),
    address : {
        addressId: null,
        country: null,
        postcode: null, 
        city: null, 
        street: null, 
        building: null, 
        apartment: null,
        shippingMethod: null, 
        shippingValue: 0,
    },
    userAddresses : [],
    clientComments : '',
    payment : {}
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_ADDRESSES_SUCCESS : {
            return {
                ...state,
                userAddresses : action.payload
            }
        }
        case CLEAR_CART :
        case PLACE_ORDER_SUCCESS: {
            localStorage.removeItem('cart');
            localStorage.removeItem('value');
            
            return {
                productList : [],
                value : 0.0,
                address : {
                    addressId: null,
                    country: null,
                    postcode: null, 
                    city: null, 
                    street: null, 
                    building: null, 
                    apartment: null,
                    shippingMethod: null, 
                    shippingValue: 0,
                },
                userAddresses : [],
                clientComments : '',
                payment : {}
            }
        }
        case ADD_PAYMENT_METHOD: {
            const method = action.payload;
            return {
                ...state,
                payment: method,
            }
        }
        case ADD_ADDRESS: {
            const { addressId, country, postcode, city, street, building, apartment, shippingMethod, shippingValue } = action.payload;

            return {
                ...state,
                address : {
                    addressId: addressId,
                    country: country,
                    postcode: postcode, 
                    city: city, 
                    street: street, 
                    building: building, 
                    apartment: apartment,
                    shippingMethod: shippingMethod, 
                    shippingValue: shippingValue,
                },
            }
        }
        case ADD_PRODUCT_TO_CART: {
            const {  productId, productName, price } = action.payload;

            
            let cartProduct = state.productList.filter( 
                product => product.id === productId
            );
            
            if(cartProduct.length !== 0){
                cartProduct[0].quantity++;
            }else{                
                cartProduct = [{
                    id: productId,
                    name: productName,
                    price: parseFloat(price).toFixed(2),
                    quantity: 1
                }]
            }

            const updatedProductList = [...state.productList.filter( 
                product => product.id !== productId
            ), cartProduct[0]];
            
            
            const cartValue = updatedProductList.reduce(
                (val, product) => product.price * product.quantity + val, 0.0);

            // update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedProductList));
            localStorage.setItem('value', parseFloat(cartValue).toFixed(2));

            return {
                ...state,
                productList: updatedProductList,
                value: parseFloat(cartValue).toFixed(2),
            }
        }
        case REDUCE_PRODUCT_QUANTITY_FROM_CART: {
            const { productId } = action.payload;
            
            let cartProduct = state.productList.filter( 
                product => product.id === productId
            );
            
            if(cartProduct.length === 0){
                console.log("cannot reduce quantity of not existing product");
                return state;
            }

            cartProduct[0].quantity--;
            let updatedProductList = [...state.productList.filter( 
                product => product.id !== productId
            )];

            if(cartProduct[0].quantity !== 0){
                updatedProductList = [...updatedProductList, cartProduct[0]];
            }

            const cartValue = updatedProductList.reduce(
                (val, product) => product.price * product.quantity + val, 0.0);

            // update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedProductList));
            localStorage.setItem('value', parseFloat(cartValue).toFixed(2));

            return {
                ...state,
                productList: updatedProductList,
                value: parseFloat(cartValue).toFixed(2),
            }
        }case REMOVE_PRODUCT_FROM_CART: {
            const { productId } = action.payload;
            
            const updatedProductList = state.productList.filter( 
                product => product.id !== productId
            );
            const cartValue = updatedProductList.reduce(
                (val, product) => product.price * product.quantity + val, 0.0);

            // update localStorage
            localStorage.setItem('cart', JSON.stringify(updatedProductList));
            localStorage.setItem('value', parseFloat(cartValue).toFixed(2));
            
            return {
                ...state,
                productList: updatedProductList,
                value: parseFloat(cartValue).toFixed(2),
            }
        }
        default:
            return state;
    }
}

export default cartReducer;