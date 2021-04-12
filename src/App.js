import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import './App.css';
import Footer from "./components/Footer/Footer";


function App() {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then((result) => {
                setState([result][0]);
            });
    }, []);

    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <h2 style={{paddingTop: 60 + 'px'}}>Home Page</h2>
                    </Route>
                    <Route path='/articles'>
                        <Articles articlesData={state}/>
                    </Route>
                    <Route exact path='/articles/liked'>
                        <Articles articlesData={state}/>
                    </Route>
                    <Route path='/contact'>
                        <h2 style={{paddingTop: 60 + 'px'}}>Contact Page</h2>
                    </Route>
                    <Route path='/about'>
                        <h2 style={{paddingTop: 60 + 'px'}}>About Page</h2>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
