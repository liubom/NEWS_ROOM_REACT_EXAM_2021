import "./FullTextModal.css";

const FullTextModal = (props) => {

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal_content">

                <img src={props.aData.img} alt={props.aData.title}/>

                <h3>{props.aData.title}</h3>
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