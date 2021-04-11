import React from "react";
import ('./Articles.css')

const Articles = (props) => {

    return (
        <div className='articles'>
            <h2>Latest News</h2>
            <ul>
                {props.articlesData.map(a =>
                    <li key={a.id}><h3>{a.title}</h3>
                        <p>{a.content}</p>
                        <p><span className='author'>Author: {a.author}</span> - <span className='date'>{a.date}</span></p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Articles;