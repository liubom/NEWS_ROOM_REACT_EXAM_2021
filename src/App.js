import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserContext from "./context/UserContext";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

    const [state, setState] = useState([]);
    const [user, setUser] = useState('');


    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then((result) => {
                setState([result][0]);
            });
    }, []);


    const setLoginUser = (value) => {
        setUser(value);
        setState([...state])
        localStorage.setItem('user', value);
    }

    const logoutUser = () => {
        setUser('');
        setState([...state]);
        localStorage.removeItem('user');
    }

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <div className="App">
                <Router>
                    <UserContext.Provider value={user}>
                        <Header logoutUser={logoutUser} setLoginUser={setLoginUser}/>
                    </UserContext.Provider>
                    <Switch>
                        <Route exact path='/'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route path='/liked'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route path='/contact'>
                            <h2 style={{paddingTop: 60 + 'px'}}>Contact Page</h2>
                        </Route>
                        <Route path='/about'>
                            <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                        </Route>
                        <Route path='*'>
                            Page Not Found
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <Router>
                    <Header setLoginUser={setLoginUser} logoutUser={logoutUser}/>
                    <Switch>
                        <Route exact path='/'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route path='/contact'>
                            <h2 style={{paddingTop: 60 + 'px'}}>Contact Page</h2>
                        </Route>
                        <Route path='/about'>
                            <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                        </Route>
                        <Route path='*'>
                            <h2>Page Not Found</h2>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }

}

export default App;
