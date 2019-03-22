import React, {Component} from 'react';
import './../App.css';

class NavBar extends Component {
    render() {
        return (

            <nav className="nav">
                <div>Games</div>
                <div>Settings</div>
                <div>whats new?</div>
            </nav>

        );
    }
}

export default NavBar;
