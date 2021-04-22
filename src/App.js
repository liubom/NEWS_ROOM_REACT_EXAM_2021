import React, {useState, useEffect,} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useStorageState} from "react-storage-hooks";


import Header from "./components/Header/Header";
import LogMessage from "./components/Header/Navigation/Login/LogMessage/LogMessage";
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
    const [user, setUser] = useState(null);
    const [likedIds, setLikes] = useState([]);
    const [allFetchedArticles, setAllFetched] = useStorageState(localStorage, 'fetched-articles', []);
    const [isWrong, setIsWrong] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then((result) => {
                if (state.length === 0) {
                    setState([result][0]);
                    setAllFetched(result[0]);
                }
            })
            .catch(error => console.error(error));
    });

    const validUsers = ['liubo', 'mitko', 'pesho', 'martin'];


    const setLoginUser = (value) => {
        if (value.trim().length > 4 && validUsers.includes(value.trim().toLowerCase())) {
            localStorage.setItem('user', value);
            setUser(value);
            setState([...state]);
        } else {
            setIsWrong(true);
            console.log(isWrong);
            setTimeout(() => {
                setIsWrong(false);
                console.log(isWrong);
            }, 2500);
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

    const allLikedArticles = localStorage.getItem('likedArticles') ? JSON.parse(localStorage.getItem('likedArticles')) : [];

    const userLikes = allLikedArticles.filter(a => {
        return a.user === currentUser

    });

    const userLikedArticlesIDs = userLikes[0] ? userLikes[0].likes : [];

    if (currentUser) {
        return (
            <div className="App">
                {isWrong && <LogMessage msg={'Wrong Username'}/>}
                <Weather/>
                <Router>
                    <Header logoutUser={logoutUser} setLoginUser={setLoginUser} likedIDs={userLikedArticlesIDs}/>
                    <Switch>
                        <Route exact path='/'>
                            <Articles articlesData={state} setLiked={setLikedArticles}/>
                        </Route>
                        <Route path='/liked'>
                            <FavoriteArticles allArticles={state} likes={userLikedArticlesIDs}/>
                        </Route>
                        <Route path='/search'>
                            <Search articlesData={state} setLiked={setLikedArticles}/>
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
