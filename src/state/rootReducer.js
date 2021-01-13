import { combineReducers } from 'redux';

import productReducer from './products/productReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
});

export default rootReducer;