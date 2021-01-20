import axios from '../../axios-config.js';

export const CREATE_COMMENT_SUCCES = 'CREATE_COMMENT_SUCCES';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

export const GET_COMMENTS_SUCCES = 'GET_COMMENTS_SUCCES';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

export const getCommentsToProduct = (productId) => async dispatch => {
    if(productId){
      axios.get(`/comments/${productId}`)
        .then(res => {
          dispatch({
            type: GET_COMMENTS_SUCCES,
            payload: res.data,
          })
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: GET_COMMENTS_FAILURE,
            payload: {
              message: err.message
            },
          })
        });
      }
}

export const createCommentToProduct = ({ nick, stars, description, productId, authorId }) => async dispatch => {
  axios.put("/comments/create", { nick, stars, description, productId, authorId })
    .then(res => {
      dispatch({
        type: CREATE_COMMENT_SUCCES,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_COMMENTS_FAILURE,
        payload: {
          message: err.message
        },
      })
    });
}