import {
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGIN_FAILURE
} from './authActions'; 

const initialState = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    // eslint-disable-next-line eqeqeq
    isAdmin : localStorage.getItem('isAdmin') == 'true',        // localStorage stores things in a string so could not use '==='   
    // eslint-disable-next-line eqeqeq
    isLoggedIn : localStorage.getItem('isLoggedIn') == 'true',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: {
            const { id, isAdmin, name } = action.payload;
            const user = { id, name };

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
        case LOGIN_FAILURE:{
            localStorage.setItem('user', null);
            localStorage.setItem('isAdmin', false);
            localStorage.setItem('isLoggedIn', false);
            return {
                ...state,
                user : null,
                isAdmin : false,
                isLoggedIn : false,
            }
        }
        case LOGOUT_REQUEST: {
            localStorage.setItem('user', null);
            localStorage.setItem('isAdmin', false);
            localStorage.setItem('isLoggedIn', false);

            return {
                ...state,
                user : null,
                isAdmin : false,
                isLoggedIn : false,
            }
        }
        default:
            return state;
    }
}

export default authReducer;