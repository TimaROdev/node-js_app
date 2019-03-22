import React, {Component} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <NavBar/>
                <HomePage/>
            </div>
        );
    }
}

export default App;
