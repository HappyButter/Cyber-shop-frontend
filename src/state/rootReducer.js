import { combineReducers } from 'redux';

import productReducer from './products/productReducer';
import authReducer from './auth/authReducer';
import promosReducer from './promo/promoReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    products: productReducer,
    promos: promosReducer,
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;