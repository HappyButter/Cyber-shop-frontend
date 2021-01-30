import {
    GET_PRODUCTS_IN_SERVICE_SUCCESS,
    ADD_PRODUCT_TO_SERVICE_SUCCESS,
    PRODUCT_IN_SERVICE_STATUS_UPDATE_SUCCESS,
    SET_TO_EDIT_PRODUCT_IN_SERVICE
} from './productsServiceActions';


const initialState = {
    productList : [],
    currentlyEdit : {}
}

const productsInServiceReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case SET_TO_EDIT_PRODUCT_IN_SERVICE : {
            return {
                ...state,
                currentlyEdit : action.payload
            }
        }
        case GET_PRODUCTS_IN_SERVICE_SUCCESS: {
            return {
                ...state,
                productList : action.payload
            }
        }        
        case ADD_PRODUCT_TO_SERVICE_SUCCESS: {
            alert("Produkt dodany do serwisu. Sprawdź zakładkę 'zarządzaj serwisem'.")
            const added = action.payload;
            return {
                ...state, 
                productList : [...state.productList, ...added]
            };
        }
        case PRODUCT_IN_SERVICE_STATUS_UPDATE_SUCCESS: {
            alert("Zmieniono status produktu w serwisie.")
            const updated = action.payload;
            const reducedState = state.productList.filter(product => product.id !== updated[0].id);

            return {
                ...state,
                productList : [...reducedState, ...updated]
            };
        }
        default: 
            return state;
    }

}

export default productsInServiceReducer;