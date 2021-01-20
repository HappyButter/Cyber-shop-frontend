import Rating from '@material-ui/lab/Rating';
import { Span } from './commentItem.css';

const CommentItem = ({commentData}) => {
    
    return (
        <article>
            <hr/>
            <header>
                <Span>{commentData.nick}</Span>
                <Rating name="read-only" 
                        value={parseInt(commentData.stars)}
                        readOnly />
            </header>
            <p>
                {commentData.description}
            </p>
        </article>
    )
}

export default CommentItem;