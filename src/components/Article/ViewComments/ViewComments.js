import "./ViewComments.css";
import Comment from "./Comment/Comment";

const ViewComments = (props) => {

    if (!props.showView) {
        return null;
    }

    let isCommented = localStorage.getItem(`${props.aData.id}-article-comments`);

    if (isCommented) {

        let commentsArray = JSON.parse(isCommented);

        return (
            <div className='comments_modal'>
                <div className='comments_modal_content'>
                    <div className='close_button_div'>
                        <button className='close_comments' onClick={props.toggleModalView}>CLOSE</button>
                    </div>
                    <div className='comments'>
                        <h3 className='article_title_comments'>{props.aData.title}</h3>
                        <h4 className='comments_title'>Comments</h4>
                        {commentsArray.map(c => {
                            return <Comment key={c.title} c={c}/>;
                        })}
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
                    This Article isn't commented yet...
                </div>
                <div>
                    <button className='close_comments' onClick={props.toggleModalView}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default ViewComments;