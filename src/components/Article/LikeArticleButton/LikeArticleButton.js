import {useEffect, useState} from "react";

import ('./LikeArticleButton.css');

const LikeArticleButton = (props) => {

    const currentUser = localStorage.getItem('user');

    const likes = JSON.parse(localStorage.getItem('likedArticles'));
    const articleID = props.a.id;
    let isLikedFromUser = '';
    let isCurrentLikes = !!likes;
    const likedAttributes = {classN: "likedArticle", buttonText: 'You like this article'};
    //const likeAttributes = {classN: "likedArticle", buttonText: 'You like this article'};

    if (isCurrentLikes) {
        isLikedFromUser = likes.findIndex(u => {
            return u.likes.includes(articleID) && u.user === currentUser;
        })
    } else {
        isLikedFromUser = -1;
    }

    const [state, setSate] = useState({});

    useEffect(() => {
        setSate(isLikedFromUser < 0 ? {
            classN: "likeArticle",
            buttonText: 'LIKE THIS ARTICLE'
        } : {classN: "likedArticle", buttonText: 'You like this article'})
    }, [isLikedFromUser]);

    const likeArticle = (e) => {

        props.flashMessage('liked');
        props.setLiked();

        if (!isCurrentLikes) {
            let likedArticles = JSON.stringify([{user: currentUser, likes: [articleID]}]);
            localStorage.setItem('likedArticles', likedArticles);
            setSate(likedArticles);
        } else {
            let currentLikes = JSON.parse(localStorage.getItem('likedArticles'));
            let isLiker = currentLikes.findIndex((u) => {
                return u.user === currentUser;
            });

            if (isLiker < 0) {
                currentLikes.push({user: currentUser, likes: [articleID]});
                setSate(likedAttributes);
                localStorage.setItem('likedArticles', JSON.stringify(currentLikes));
            } else {
                if (!currentLikes[isLiker].likes.includes(articleID)) {
                    currentLikes[isLiker].likes.push(articleID);
                    localStorage.setItem('likedArticles', JSON.stringify(currentLikes));
                    setSate(likedAttributes);
                }
            }
        }
    }
    if (currentUser && isLikedFromUser < 0) {
        return (
            <button className={state.classN} onClick={likeArticle}>{state.buttonText}</button>
        );
    } else if (currentUser && isLikedFromUser > -1) {
        return (
            <button className={state.classN}>{state.buttonText}</button>
        )
    }

    return (
        <>

        </>
    );
}

export default LikeArticleButton;