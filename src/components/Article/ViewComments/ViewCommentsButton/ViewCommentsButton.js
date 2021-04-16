import React from "react";

import ('./ViewCommentsButton.css');

const ViewCommentsButton = (props) => {

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <button className='view_comments_btn' onClick={props.toggleModalView}>
                VIEW COMMENTS
            </button>
        );
    }

    return (
        <></>
    );
}

export default ViewCommentsButton;

