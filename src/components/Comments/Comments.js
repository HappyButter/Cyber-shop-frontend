import { CommentItem } from '../CommentItem';
import { CommentForm } from '../CommentForm';
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
    const auth = useSelector(status => status.auth);

    comments.sort((a, b) => b.id - a.id);
    const commentsList = comments.map( 
        comment => <CommentItem commentData={comment}/>
    );
    
    return (
        <CommentsWrapper>
            {auth.isLoggedIn 
            ? <CommentForm userId={auth.user.id}
                            productId={productId}/> 
            : null}
            {commentsList}
        </CommentsWrapper>
    );
}


export default Comments;