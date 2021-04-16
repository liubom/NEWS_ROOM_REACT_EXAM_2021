import React from "react";

import ('./ReadMore.css')

const ReadMore = (props) => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <p>
                <button className='readArticle' onClick={props.toggleModal}>READ FULL TEXT</button>
            </p>
        )
    }

    return (
        <p>[Login to read full article]</p>
    )
}

export default ReadMore;