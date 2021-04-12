import React from "react";

import ('./Article.css');

const Article = (props) => {

    return (
        <>
            {props.articles.map(a =>
                <div key={a.id} className='article'>
                    <div key={a.id} className='articleTitle'>{a.title}</div>
                    <div key={a.id} className='articleMain'>
                        <div className='img'><img key={a.id} src={a.img} alt={a.title} className='articleImage'/></div>
                        <div key={a.id} className='articleText'>{a.content.split('.')[0]}.</div>
                    </div>
                    <div className='articleBottom'>
                        <div key={a.id} className='articleDate'>{a.date}</div>
                        <div key={a.id} className='articleAuthor'>Author: {a.author}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Article;