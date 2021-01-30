import {
    GET_ALL_PRODUCTS_SUCCESS,
    GET_PROMO_PRODUCTS_SUCCESS,
    GET_RECOMMENDED_PRODUCTS_SUCCESS,
    GET_PRODUCT_SUCCESS,
    GET_CATEGORY_PRODUCTS_SUCCESS,
    GET_PROMO_PRODUCTS_FAILURE,
    SET_TO_EDIT_PRODUCT,
    CREATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_STORAGE_SUCCESS
} from './productActions'; 


const initialState = {
    recommended : [],
    promoProducts : [],
    categoryProducts : [],
    productDetails : {},
    allProducts : [],
    currentlyEdited : {}
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_STORAGE_SUCCESS : {
            const updatedProduct = action.payload;
            
            state.allProducts.forEach(prod => 
                prod.id === updatedProduct.id 
                ? prod.quantity += updatedProduct.quantity 
                : null
            )

            return {
                ...state,
                currentlyEdited : {}
            }
        }
        case UPDATE_PRODUCT_SUCCESS : {
            const updatedProduct = action.payload;
            const reducedPromoList = state.allProducts.filter(
                prod => prod.id !== updatedProduct[0].id 
            );
            
            return {
                ...state,
                allProducts: [...reducedPromoList, ...updatedProduct],
                currentlyEdited : {}
            }
        }
        case CREATE_PRODUCT_SUCCESS : {
            const product = action.payload;
            return {
                ...state,
                allProducts: [...state.allProducts, ...product],
            }
        }
        case SET_TO_EDIT_PRODUCT: {
            return {
                ...state,
                currentlyEdited : action.payload
            }
        }
        case GET_ALL_PRODUCTS_SUCCESS: {
            const productList = action.payload;
      
            return {
              ...state,
              allProducts: productList,
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