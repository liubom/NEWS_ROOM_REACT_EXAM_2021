import React, {useState} from "react";
import Article from "../../Article/Article";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    useLocation,
    Switch,
} from 'react-router-dom';
import {useStorageState} from "react-storage-hooks";

import ('./Search.css');

const Search = (props) => {

    const [searchResult, setSearch] = useStorageState(localStorage, 'searchFor', []);
    let [fieldValue, setFieldValue] = useState('');

    const searchHandler = (e) => {
        e.preventDefault();

        setFieldValue = e.currentTarget.value;

        fetch(`http://localhost:5000/articles?title_like=${e.currentTarget.previousSibling.value}`)
            .then(res => res.json())
            .then((result) => {
                setSearch([result][0]);
            });
    }

    return (
        <>
            <div className='articles'>
            <h2 className='search'>Search for Article</h2>
            <div className='searchForm'>
                <input onChange={(e) => {
                    e.currentTarget.value = e.currentTarget.value.toUpperCase();
                }} className='search_field' type='text' placeholder='What are you looking for?' />
                <button className='search_btn' onClick={searchHandler}>SEARCH</button>
            </div>
            {searchResult.map(a => {
                return <Article a={a} key={a.title} setLiked={props.setLiked}/>
            })}
            </div>
        </>
    )
}

export default Search