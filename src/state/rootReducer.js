import { combineReducers } from 'redux';

import productReducer from './products/productReducer';
import authReducer from './auth/authReducer';
import promosReducer from './promo/promoReducer';
import cartReducer from './cart/cartReducer';
import commentsReducer from  './comments/commentsReducer';
import ordersReducer from './orders/ordersReducer';
import categoriesReducer from './categories/categoriesReducer';
import productsInServiceReducer from './productsService/productsServiceReducer';

const rootReducer = combineReducers({
    products: productReducer,
    promos: promosReducer,
    auth: authReducer,
    cart: cartReducer,
    comments: commentsReducer,
    orders: ordersReducer,
    categories: categoriesReducer,
    productsInService : productsInServiceReducer
});

export default rootReducer;