import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REDUCE_PRODUCT_QUANTITY_FROM_CART,
    CLEAR_CART,
    ADD_ADDRESS,
    ADD_PAYMENT_METHOD,
    PLACE_ORDER_SUCCESS
} from './cartActions'; 


const initialState = {
    productList : JSON.parse(localStorage.getItem('cart')) || [],
    value : parseFloat(localStorage.getItem('value')).toFixed(2) || 0.0,
    address : {},
    addressId : null,
    payment : {}
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case PLACE_ORDER_SUCCESS: {
            localStorage.removeItem('cart');
            localStorage.removeItem('value');
            return {
                productList : [],
                value : 0.0,
                address : {},
                payment : {},
                clientComments : ''
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
            const { country, postcode, city, street, building, apartment, shippingMethod } = action.payload;

            return {
                ...state,
                address : { 
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
        case CLEAR_CART : {
            localStorage.removeItem('cart');
            localStorage.removeItem('value');
            return {
                productList : [],
                value : 0.0,
                address : {},
                payment : {},
                clientComments : ''
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
            const cartValue = state.productList.reduce(
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