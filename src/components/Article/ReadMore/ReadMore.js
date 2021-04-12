import React from "react";
import ('./ReadMore.css')

const ReadMore = (props) => {

    return (
        <p>
            <button className='readArticle' onClick={props.toggleModal}>Read Full Text</button>
        </p>
    )
}

export default ReadMore;