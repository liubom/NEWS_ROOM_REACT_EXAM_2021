import React from "react";

import ('./AddCommentButton.css');

const AddCommentButton = (props) => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <button className='add_comment_article_btn' onClick={props.toggleModalAdd}>
                ADD COMMENT
            </button>
        );
    }

    return (
        <></>
    );
}

export default AddCommentButton;