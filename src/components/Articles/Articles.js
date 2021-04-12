import Article from "../Article/Article";
import ('./Articles.css');

const Articles = (props) => {

    return (
        <>
            <h2 className='categoryTitle'>Latest News</h2>
            <Article articles={props.articlesData}/>
        </>
    )
};

export default Articles;