import LikeArticleButton from "./LikeArticleButton/LikeArticleButton";
import ReadMore from "./ReadMore/ReadMore";
import FullTextModal from "./ReadMore/FullTextModal/FullTextModal";
import {useState} from "react";

import ('./Article.css');

const Article = (props) => {

    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    }

    return (
        <>
            <FullTextModal aData={props.a} toggleModal={toggleModal} show={show}/>
            <div key={props.a.id} className='article'>
                <div key={props.a.id + 'articleTitle'} className='articleTitle'>{props.a.title}</div>
                <div key={props.a.id + 'articleMain'} className='articleMain'>
                    <div key={props.a.id + 'img'} className='img'><img key={props.a.id} src={props.a.img}
                                                                       alt={props.a.title} className='articleImage'/>
                    </div>
                    <div key={props.a.id + 'articleText'}
                         className='articleText'>{props.a.content.split('.')[0]}. <ReadMore toggleModal={toggleModal}/>
                    </div>
                </div>
                <div className='articleBottom'>
                    <div key={props.a.id + 'articleDate'} className='articleDate'>{props.a.date}</div>
                    <div key={props.a.id + 'articleAuthor'} className='articleAuthor'>Author: {props.a.author}</div>
                    <LikeArticleButton buttonKey={props.a.id + 'likeArticle'} a={props.a}/>
                </div>
            </div>
        </>
    )
}

export default Article;