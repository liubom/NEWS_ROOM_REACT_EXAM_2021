import LikeArticleButton from "./LikeArticleButton/LikeArticleButton";
import AddCommentButton from "./AddCommentButton/AddCommentButton";
import ReadMore from "./ReadMore/ReadMore";
import FullTextModal from "./ReadMore/FullTextModal/FullTextModal";
import {useState} from "react";
import {useStorageState} from "react-storage-hooks";
import ViewCommentsButton from "./ViewComments/ViewCommentsButton/ViewCommentsButton";
import ViewComments from "./ViewComments/ViewComments";
import AddComment from "./AddComment/AddComment";

import ('./Article.css');

const Article = (props) => {

    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const [comments, setComments] = useStorageState(localStorage, 'articles-comments', []);

    const toggleModal = () => {
        setShow(!show);
    }

    const toggleModalAdd = () => {
        setShowAdd(!showAdd);
    }

    const toggleModalView = () => {
        setShowView(!showView);
    }

    return (
        <>
            <FullTextModal aData={props.a} toggleModal={toggleModal} show={show}/>
            <AddComment aData={props.a} toggleModalAdd={toggleModalAdd} showAdd={showAdd}/>
            <ViewComments aData={props.a} toggleModalView={toggleModalView} showView={showView}/>
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
                    <LikeArticleButton buttonKey={props.a.id + 'likeArticle'} a={props.a} setLiked={props.setLiked}/>
                    <AddCommentButton a={props.a} toggleModalAdd={toggleModalAdd}/>
                    <ViewCommentsButton a={props.a} toggleModalView={toggleModalView}/>
                </div>
            </div>
        </>
    )
}

export default Article;