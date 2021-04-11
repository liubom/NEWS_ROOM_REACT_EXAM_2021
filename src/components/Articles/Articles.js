import React from "react";

const Articles = (props) => {

    return (
        <div>
            <h3>Latest News</h3>
            <ul>
                {props.articlesData.map(a =>
                    <li key={a.id}><h3>{a.title}</h3>
                        <p>{a.content}</p>
                        <span>{a.date}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Articles;