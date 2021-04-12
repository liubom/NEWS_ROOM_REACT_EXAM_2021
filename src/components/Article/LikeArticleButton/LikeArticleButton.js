import {useState} from "react";

import ('./LikeArticleButton.css');

const LikeArticleButton = (props) => {

    const [state, setSate] = useState({classN: "likeArticle", buttonText: 'Like this article'});

    const likeArticle = (e) => {
        //console.log(e.target.parentElement.firstElementChild.innerHTML);
        setSate({classN: "likedArticle", buttonText: 'You like this article'});
        //console.log(state)
    }

    return (
        <button className={state.classN} onClick={likeArticle}>{state.buttonText}</button>
    )
}

export default LikeArticleButton;