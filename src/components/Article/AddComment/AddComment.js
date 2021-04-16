import "./AddComment.css";

const AddComment = (props) => {

    if (!props.showAdd) {
        return null;
    }

    const sendComment = (val) => {

        if (val === '') {
            return;
        }

        const maxChars = 500;

        let ifArticleCommented = localStorage.getItem(`${props.aData.id}-article-comments`);
        console.log(ifArticleCommented);

        if (!ifArticleCommented) {

            localStorage.setItem(`${props.aData.id}-article-comments`, "[]");

            const arrayOfComments = JSON.parse(localStorage.getItem(`${props.aData.id}-article-comments`));

            arrayOfComments.unshift({id: props.aData.id, user: localStorage.getItem('user'), comment: val});

            localStorage.setItem(`${props.aData.id}-article-comments`, JSON.stringify([...arrayOfComments]));
        } else {
            const arrayOfComments = JSON.parse(localStorage.getItem(`${props.aData.id}-article-comments`));

            arrayOfComments.unshift({id: props.aData.id, user: localStorage.getItem('user'), comment: val});

            localStorage.setItem(`${props.aData.id}-article-comments`, JSON.stringify([...arrayOfComments]));
        }
    }

    return (
        <div className='add_comment_modal'>
            <div className='add_comment_modal_content'>
                <div className='close_add'>
                    <button className='close_add_comments' onClick={props.toggleModalAdd}>CLOSE</button>
                </div>
                <h3>{props.aData.title}</h3>
                <div className='add_comments'>
                    <textarea onChange={(e) => {
                        console.log(e.currentTarget.value.length);
                    }} className='comment_text_input'/>
                    <button className='send_comment' onClick={(e) => {
                        sendComment(e.currentTarget.previousSibling.value);
                        e.currentTarget.previousSibling.value = '';
                    }}>SEND COMMENT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddComment;