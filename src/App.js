import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './components/Header';
import PostsList from './components/PostsList';
import SinglePost from './components/SinglePost';
import Home from './components/Home';



class App extends Component {
    render() {
        return (
            <Router>
                <div id="app">
                    <Header />
                    <Main>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/posts" component={PostsList} />
                        <Route exact path="/posts/:id" component={SinglePost} />
                    </Main>
                </div>
            </Router>
        );
    }
}

const Main = props => (
    <main className="uk-section">
        <div className="uk-container">
            {props.children}
        </div>
    </main>
)

export default App;
