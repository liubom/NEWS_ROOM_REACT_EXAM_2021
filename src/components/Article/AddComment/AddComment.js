import "./AddComment.css";

const AddComment = (props) => {

    if (!props.showAdd) {
        return null;
    }


    return (
        <div className='add_comment_modal'>
            <div className='add_comment_modal_content'>
                <h3>{props.aData.title}</h3>
                <div>
                    <button className='close_add_comments' onClick={props.toggleModalAdd}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default AddComment;