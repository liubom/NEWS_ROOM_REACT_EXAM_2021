import Article from "../Article/Article";
import ('./Articles.css');


const Articles = (props) => {

    console.log(props);

    return (
        <div className='articles'>
            <h2 className='categoryTitle'>Latest News</h2>
            {props.articlesData.map(a =>
                <Article a={a} key={a.title} setLiked={props.setLiked}/>
            )}
        </div>
    )
};

export default Articles;