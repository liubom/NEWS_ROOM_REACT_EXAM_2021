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
                    <button className='close_article' onClick={props.toggleModal}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default FullTextModal;