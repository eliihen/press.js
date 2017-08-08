import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import Home from './components/Home';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';
UIkit.use(Icons);



class App extends Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <Header />
                    <main className="App">
                        <Route exact path="/" component={Home} />
                        <Route path="/posts/:id?" component={Posts} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
