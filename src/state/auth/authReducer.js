import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_ACCOUNT_UPDATE_SUCCESS,
    CLEAR_NOTIFICATION
} from './authActions';  

const initialState = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    // eslint-disable-next-line eqeqeq
    isAdmin : localStorage.getItem('isAdmin') == 'true',        // localStorage stores things in a string so could not use '==='   
    // eslint-disable-next-line eqeqeq
    isLoggedIn : localStorage.getItem('isLoggedIn') == 'true',
    notification : null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_NOTIFICATION: {
            return {
                ...state,
                notification: null,
            }
        }
        case REGISTER_SUCCESS: {
            const user = action.payload;

            // update localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAdmin', false);
            localStorage.setItem('isLoggedIn', true);

            return {
                ...state,
                user,
                isAdmin : false,
                isLoggedIn : true
            }
        }
        case LOGIN_SUCCESS: {
            const { id, isAdmin, name, surname, phoneNumber } = action.payload;
            const user = { id, name, surname, phoneNumber };

            // update localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem('isLoggedIn', true);

            return {
                ...state,
                user,
                isAdmin : isAdmin,
                isLoggedIn : true
            }
        }
        case USER_ACCOUNT_UPDATE_SUCCESS: {
            const { id, name, surname, phoneNumber } = action.payload;
            const user = { id, name, surname, phoneNumber };

            // update localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isLoggedIn', true);

            return {
                ...state,
                user
            }
        }
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case LOGOUT_REQUEST: {
            localStorage.clear();
            return {
                ...state,
                user : null,
                isAdmin : false,
                isLoggedIn : false,
                notification : action.payload
            }
        }
        default:
            return state;
    }
}

export default authReducer;