import Article from "../Article/Article";
import ('./Articles.css');

const Articles = (props) => {

    return (
        <div className='articles'>
            <h2 className='categoryTitle'>Latest News</h2>
            {props.articlesData.map(a =>
                <Article a={a} key={a.title}/>
            )}
        </div>
    )
};

export default Articles;