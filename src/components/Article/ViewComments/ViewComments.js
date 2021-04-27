import "./ViewComments.css";
import Comment from "./Comment/Comment";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const ViewComments = (props) => {

    if (!props.showView) {
        return null;
    }

    let isCommented = localStorage.getItem(`${props.aData.id}-article-comments`);

    if (isCommented) {

        const commentsArray = JSON.parse(isCommented);
        const comments = commentsArray.map(comment => {
            return <Comment key={generateUniqueID.toString()} c={comment}/>
        })

        return (
            <div className='comments_modal'>
                <div className='comments_modal_content'>
                    <div className='close_button_div'>
                        <button className='close_comments' onClick={props.toggleModalView}>CLOSE</button>
                    </div>
                    <div className='comments'>
                        <h3 className='article_title_comments'>{props.aData.title}</h3>
                        <h4 className='comments_title'>Comments</h4>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='comments_modal'>
            <div className='comments_modal_content'>
                <h3>{props.aData.title}</h3>
                <h4>Comments</h4>
                <div className='comments'>
                    There are no comments for this article so far.
                    Be the first to comment on this article.
                </div>
                <div>
                    <button className='close_comments' onClick={props.toggleModalView}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default ViewComments;