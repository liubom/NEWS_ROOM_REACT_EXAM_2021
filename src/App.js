import React, {useState, useEffect} from "react";
import Articles from "./components/Articles/Articles";
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

    return (
        <div className="App">
            <h2>News Room</h2>
            <Articles articlesData={state}/>
        </div>
    );
}

export default App;
