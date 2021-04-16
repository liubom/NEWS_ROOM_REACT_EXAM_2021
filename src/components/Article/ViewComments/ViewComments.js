import "./ViewComments.css";

const ViewComments = (props) => {

    if (!props.showView) {
        return null;
    }


    return (
        <div className='comments_modal'>
            <div className='comments_modal_content'>
                <h3>{props.aData.title}</h3>
                <h4>Comments</h4>
                <div className='comments'>
                    ALL COMMENTS HERE...
                </div>
                <div>
                    <button className='close_comments' onClick={props.toggleModalView}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default ViewComments;