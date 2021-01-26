import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS_SUCCESS,
    GET_PROMO_PRODUCTS_SUCCESS,
    GET_RECOMMENDED_PRODUCTS_SUCCESS,
    GET_PRODUCT_SUCCESS,
    GET_CATEGORY_PRODUCTS_SUCCESS,
    GET_PROMO_PRODUCTS_FAILURE
} from './productActions'; 

let idGenerator = 1;

const initialState = {
    recommended : [],
    promoProducts : [],
    categoryProducts : [],
    productDetails: {}
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_PRODUCT: {
            const { name, price } = action.payload;

            const createdProduct = {
                id : idGenerator++,
                name, 
                price,
            };

            // update localStorage
            const products = JSON.parse(localStorage.getItem('products')) || [];
            localStorage.setItem('products', JSON.stringify(
              [...products, createdProduct]
            ));

            return {
                ...state,
                productList: [...state.productList, createdProduct]
            }
        }
        case DELETE_PRODUCT: {
            const { productId } = action.payload;
            
            const filteredProducts = state.productList.filter( product => product.id !== productId);

            localStorage.setItem('products', JSON.stringify(filteredProducts));

            return {
                ...state,
                productList: filteredProducts,
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            const posts = action.payload.posts;
      
            return {
              ...state,
              posts,
            }
        }
        case GET_RECOMMENDED_PRODUCTS_SUCCESS: {
            const recommended = action.payload.recommended;

            return {
              ...state,
              recommended: recommended,
            }
        }
        case GET_PROMO_PRODUCTS_SUCCESS: {
            const promoProducts = action.payload.promoProducts;

            return {
                ...state,
                promoProducts: promoProducts,
            }
        }
        case GET_PRODUCT_SUCCESS: {
            const productDetails = action.payload.productDetails;

            return {
                ...state,
                productDetails: productDetails[0],
            }
        }
        case GET_CATEGORY_PRODUCTS_SUCCESS: {
            const categoryProducts = action.payload.categoryProducts;
            
            return {
                ...state,
                categoryProducts : categoryProducts,
            }
        }
        case GET_PROMO_PRODUCTS_FAILURE : {
            return {
                ...state,
                promoProducts : [],
            }
        }
        default:
            return state;
    }
}

export default productReducer;