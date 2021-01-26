import {
    GET_ALL_CATEGORIES_SUCCESS
} from './categoriesActions';

const initialState = {
    categoriesList : []
}


const categoriesReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES_SUCCESS:{
            return {
                ...state,
                categoriesList : action.payload
            }
        }
        default:
            return state;
    }
}

export default categoriesReducer;