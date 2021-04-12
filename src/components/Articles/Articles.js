import Article from "../Article/Article";
import ('./Articles.css');

const Articles = (props) => {

    return (
        <div className='articles'>
            <h2 className='categoryTitle'>Latest News</h2>
            <Article articles={props.articlesData}/>
        </div>
    )
};

export default Articles;