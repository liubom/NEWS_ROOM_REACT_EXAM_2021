import React from "react";
import ('./Article.css');

const Article = (props) => {

    return (
        <div className='articles'>
            {props.articles.map(a =>
                <div key={a.id} className='article'>
                    <div key={a.id} className='articleTitle'>{a.title}</div>
                    <div className='articleMain'>
                        <img key={a.id} src={a.img} alt={a.title} className='img'/>
                        <div key={a.id} className='articleText'>{a.content}</div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Article;