import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SimpleStorage from "react-simple-storage";
import UserContext from "./context/UserContext";

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Search from "./components/Articles/Search/Search";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import './App.css';
import FavoriteArticles from "./components/Articles/FavoriteArticles/FavoriteArticles";
import Weather from "./components/Header/Weather/Weather";

function App() {

    const [state, setState] = useState([]);
    const [user, setUser] = useState('');
    const [likedIds, setLikes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then((result) => {
                setState([result][0]);
            });
    }, []);

    const setLoginUser = (value) => {
        if (value.trim().length > 4) {
            localStorage.setItem('user', value);
            setUser(value);
            setState([...state]);
        }
    }

    const logoutUser = () => {
        setUser('');
        setState([...state]);
        localStorage.removeItem('user');
    }

    const setLikedArticles = () => {
        setLikes([...likedIds]);
    }

    const currentUser = localStorage.getItem('user');

    const allLikedArticles = localStorage.getItem('likedArticles') ? JSON.parse(localStorage.getItem('likedArticles')) : []; // Проверка дали съществува

    const userLikes = allLikedArticles.filter(a => {
        return a.user === currentUser

    });

    const userLikedArticlesIDs = userLikes[0] ? userLikes[0].likes : []; //Проверка

    if (currentUser) {
        return (
            <div className="App">
                <Weather/>
                <Router>
                    <UserContext.Provider value={this}>
                        <Header logoutUser={logoutUser} setLoginUser={setLoginUser} likedIDs={userLikedArticlesIDs}/>
                    </UserContext.Provider>
                    <Switch>
                        <Route exact path='/'>
                            <Articles articlesData={state} setLiked={setLikedArticles}/>
                        </Route>
                        <Route path='/liked'>
                            <FavoriteArticles allArticles={state} likes={userLikedArticlesIDs}/>
                        </Route>
                        <Route path='/search'>
                            <Search/>
                        </Route>
                        <Route path='/contact'>
                            <Contact/>
                        </Route>
                        <Route path='/about'>
                            <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                        </Route>
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <Weather/>
                <Router>
                    <Header setLoginUser={setLoginUser} logoutUser={logoutUser}/>
                    <Switch>
                        <Route exact path='/'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route path='/contact'>
                            <Contact/>
                        </Route>
                        <Route path='/about'>
                            <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                        </Route>
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }

}

export default App;
