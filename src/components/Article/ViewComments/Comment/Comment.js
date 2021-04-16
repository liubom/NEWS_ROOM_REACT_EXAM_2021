import React from "react";
import ('./Comment.css');

const Comment = (props) => {

    return(
        <>
            <div key={props.c.id} className='comment_container'>
                <div key={props.c.user} className='username_comm'>
                    {props.c.user}
                </div>

                <div key={props.c.id} className='comment_text'>
                    {props.c.comment}
                </div>

            </div>
        </>
    )
}

export default Comment;