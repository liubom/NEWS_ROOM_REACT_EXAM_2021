import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import './App.css';



function App() {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then((result) => {
                setState([result][0]);
            });
    }, []);

    const currentUser = localStorage.getItem('user');

    if (currentUser) {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Route exaxt path='/'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route exact path='/liked'>
                            <Articles articlesData={state}/>
                        </Route>
                        <Route exact path='/contact'>
                            <h2 style={{paddingTop: 60 + 'px'}}>Contact Page</h2>
                        </Route>
                        <Route exact path='/about'>
                            <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="App">
            <Router>
                <Header/>
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
                    <Route path='/login'>
                        <h2 style={{paddingTop: 60 + 'px'}}>Login Page</h2>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
