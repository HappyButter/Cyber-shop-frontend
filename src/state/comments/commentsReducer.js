import {
    CREATE_COMMENT_SUCCES,
    GET_COMMENTS_SUCCES
} from './commentsActions';


const initialState = []

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMMENTS_SUCCES : {
            return action.payload;
        }case CREATE_COMMENT_SUCCES : {
            const comment = action.payload;
            return [...state, comment];
        }default:
            return state;
    }
}

export default commentsReducer;