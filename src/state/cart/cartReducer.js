import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REDUCE_PRODUCT_QUANTITY_FROM_CART
} from './cartActions'; 


const initialState = {
    productList : JSON.parse(localStorage.getItem('cart')) || [],
    value : parseFloat(localStorage.getItem('value')) || 0.0,
    address : {},
    payment : {}
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
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
                    price: price,
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
            localStorage.setItem('value', cartValue);

            return {
                ...state,
                productList: updatedProductList,
                value: cartValue,
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
            localStorage.setItem('value', cartValue);

            return {
                ...state,
                productList: updatedProductList,
                value: cartValue,
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
            localStorage.setItem('value', cartValue);
            
            return {
                ...state,
                productList: updatedProductList,
                value: cartValue,
            }
        }
        default:
            return state;
    }
}

export default cartReducer;