import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS_SUCCESS
} from './productActions'; 

let idGenerator = 1;

const initialState = {
    productList: JSON.parse(localStorage.getItem('products')) || [],
    posts: [],
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
        default:
            return state;
    }
}

export default productReducer;