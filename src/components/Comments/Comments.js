import { CommentItem } from "../CommentItem";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getCommentsToProduct } from 'state/comments/commentsActions';
import { CommentsWrapper } from './comments.css';


const Comments = ({ productId }) => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getCommentsToProduct(productId));
    }, [dispatch, productId]);

    const comments = useSelector(status => status.comments);
    console.log(comments);

    const commentsList = comments.map( 
        comment => <CommentItem commentData={comment}/>
    );
    
    return (
        <CommentsWrapper>
            {commentsList}
        </CommentsWrapper>
    );
}


export default Comments;