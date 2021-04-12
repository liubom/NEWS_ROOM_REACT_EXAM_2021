import "./FullTextModal.css";

const FullTextModal = (props) => {

        return (
            <div className="modal">
                <div className="modal_content">
                    {this.props.children}
                    <div>
                        <button onClick={props.toggleModal}>Close</button>
                    </div>
                </div>
            </div>
        );
}

export default FullTextModal;