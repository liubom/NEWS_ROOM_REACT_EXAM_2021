import LikeArticleButton from "./LikeArticleButton/LikeArticleButton";
import ReadMore from "./ReadMore/ReadMore";
import FullTextModal from "./ReadMore/FullTextModal/FullTextModal";

import ('./Article.css');

const Article = (props) => {

    return (
        <>
            {props.articles.map(a =>
                <div key={a.id} className='article'>
                    <div key={a.id + 'articleTitle'} className='articleTitle'>{a.title}</div>
                    <div key={a.id + 'articleMain'} className='articleMain'>
                        <div key={a.id + 'img'} className='img'><img key={a.id} src={a.img} alt={a.title} className='articleImage'/></div>
                        <div key={a.id + 'articleText'} className='articleText'>{a.content.split('.')[0]}. <ReadMore/></div>
                    </div>
                    <div className='articleBottom'>
                        <div key={a.id + 'articleDate'} className='articleDate'>{a.date}</div>
                        <div key={a.id + 'articleAuthor'} className='articleAuthor'>Author: {a.author}</div>
                        <LikeArticleButton buttonKey={a.id + 'likeArticle'}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Article;