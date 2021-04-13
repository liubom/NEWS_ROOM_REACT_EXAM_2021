import {useState} from "react";

import ('./LikeArticleButton.css');


const LikeArticleButton = (props) => {

    const userName = 'liubo';
    localStorage.setItem('user', userName);
    const currentUser = localStorage.getItem('user');

    const currentLikes = JSON.parse(localStorage.getItem('likedArticles'));
    const articleID = props.a.id;
    let isLikedFromUser = '';
    let isCurrentLikes = !!currentLikes;
    
    if (isCurrentLikes) {
        isLikedFromUser = currentLikes.findIndex(u => {
            return u.likes.includes(articleID) && u.user === currentUser;
        })
    } else {
        isLikedFromUser = -1;
    }

    const [state, setSate] = useState(isLikedFromUser < 0 ? {
        classN: "likeArticle",
        buttonText: 'Like this article'
    } : {classN: "likedArticle", buttonText: 'You like this article'});

    const likeArticle = (e) => {

        if (!isCurrentLikes) {
            let likedArticles = JSON.stringify([{user: userName, likes: [articleID]}]);
            localStorage.setItem('likedArticles', likedArticles);
            setSate({classN: "likedArticle", buttonText: 'You like this article'});
        } else {
            let currentLikes = JSON.parse(localStorage.getItem('likedArticles'));
            let isLiker = currentLikes.findIndex((u) => {
                return u.user === currentUser;
            });

            if (isLiker < 0) {
                currentLikes.push({user: currentUser, likes: [articleID]});
                setSate({classN: "likedArticle", buttonText: 'You like this article'});
                localStorage.setItem('likedArticles', JSON.stringify(currentLikes));
            } else {
                if (!currentLikes[isLiker].likes.includes(articleID)) {
                    currentLikes[isLiker].likes.push(articleID);
                    localStorage.setItem('likedArticles', JSON.stringify(currentLikes));
                    setSate({classN: "likedArticle", buttonText: 'You like this article'});
                }
            }
        }
    }
    return (
        <button className={state.classN} onClick={likeArticle}>{state.buttonText}</button>
    )
}

export default LikeArticleButton;