import {useState} from "react";
import Article from "../../Article/Article";

import ('./FavoriteArticles.css');

const FavoriteArticles = (props) => {

    const [articles, setArticles] = useState(props.state)

    const allLikedArticles = JSON.parse(localStorage.getItem('likedArticles')); // Проверка дали съществува

    if (allLikedArticles === null){
        localStorage.setItem('likedArticles', JSON.stringify([]));
    }

    // console.log(props.allArticles);
    // console.log(props.likes);
    let likedArticlesFull = [];

    props.likes.forEach(secondElement => {
        let exist = props.allArticles.find((item) => item.id === secondElement);
        if (exist) {
            likedArticlesFull.push(exist)
        }
    });

    return (
        <div className='articles'>
            <h2>You can always find something interesting to read...</h2>
            {likedArticlesFull.map(a => <Article a={a}/>)}
        </div>
    )
}

export default FavoriteArticles;