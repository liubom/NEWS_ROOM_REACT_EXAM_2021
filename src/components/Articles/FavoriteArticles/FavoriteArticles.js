import {useEffect, useState} from "react";
import Article from "../../Article/Article";
import ('./FavoriteArticles.css');

const FavoriteArticles = (props) => {

    const [articles, setArticles] = useState(props.allArticles);

    const allLikedArticles = JSON.parse(localStorage.getItem('likedArticles')); // Проверка дали съществува

    if (allLikedArticles === null) {
        localStorage.setItem('likedArticles', JSON.stringify([]));
    }

    let likedArticlesFull = [];

    props.likes.forEach(id => {
        let exist = props.allArticles.find((art) => art.id === id);
        if (exist) {
            likedArticlesFull.push(exist)
        }
    });

    if (likedArticlesFull.length > 0) {
        return (
            <div className='articles'>
                <h2>You can always find something interesting to read...</h2>
                {likedArticlesFull.map(a => <Article key={a.title} a={a}/>)}
            </div>
        )
    }

    return (
        <div className='articles'>
            <h2>You can always find something interesting to read...</h2>
            <h3>add something...</h3>
        </div>
    )

}

export default FavoriteArticles;