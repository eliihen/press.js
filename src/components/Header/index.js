import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render = () => {
        return (
            <header className="uk-section uk-section-primary uk-preserve-color">
                <div className="uk-container">
                    <div is uk-grid>
                        <div className="uk-width-2-3@m uk-light"><h1 className="uk-heading-primary">Press.js</h1></div>
                        <div className="uk-width-1-3@m" id="nav">
                            <nav is uk-navbar class="uk-navbar-container uk-link-reset">
                                <ul className="uk-navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/posts">Posts</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
