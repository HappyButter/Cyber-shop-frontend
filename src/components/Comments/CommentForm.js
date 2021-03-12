import './commentForm.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createCommentToProduct } from 'state/comments/commentsActions';


const CommentForm = ({ userId, userName, productId }) => {
    const dispatch = useDispatch();

    const [nick, setNick] = useState(userName || '');
    const [commentText, setCommentText] = useState('');
    const [rate, setRate] = useState(2);



    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createCommentToProduct({
            nick,
            stars: parseInt(rate),
            description: commentText,
            productId,
            authorId:userId 
        }));
    } 
    

    return (
        <>
            <form id="comment" className="form" onSubmit={handleSubmit}>

                <label htmlFor="nick">Nick</label><br/>
                <input type="text" id="nick" name="nick" placeholder="Nick" value={nick} required 
                onChange={(event) => setNick(event.target.value)}/>
                
                <Box component="fieldset" width={300}>
                    <Typography component="legend">Twoja ocena</Typography>
                    <Rating
                        name="rating"
                        value={rate}
                        onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                    />
                </Box>
                <br/>

                <textarea name="commentText" id="commentText" placeholder="Twój komentarz"
                onChange={(event) => setCommentText(event.target.value)}></textarea>
                <br/>
                
                <button type="submit" id="addCommBtn">Dodaj komentarz</button>
                <br/><br/>
            </form>
        </>
    );
}

export default CommentForm;