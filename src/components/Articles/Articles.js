import Article from "../Article/Article";
import ('./Articles.css');


const Articles = (props) => {

    const articles = props.articlesData.map(article => {
         return <Article a={article} key={article.title} setLiked={props.setLiked}/>
    })

    return (
        <div className='articles'>
            <h2 className='categoryTitle'>Latest News</h2>
            {articles}
        </div>
    )
};

export default Articles;