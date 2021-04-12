import "./FullTextModal.css";

const FullTextModal = (props) => {

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <p>
                    {props.aData.content}
                </p>
                <div>
                    <button className='readArticle' onClick={props.toggleModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default FullTextModal;