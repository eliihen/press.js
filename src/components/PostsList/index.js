import React, { Component } from 'react';
import * as WordPress from '../../libraries/WordPress';
import Post from '../Post';
import Spinner from '../Spinner';

/**
 * A wrapper component for all of the posts (or the single post).
 */
class PostsList extends Component {
    state = {
        inProgress: false,
        posts: []
    }

    /**
     * Handles getting the posts from WordPress.
     */
    handlePosts = async () => {
        this.setState({ inProgress: true });
        let response = await WordPress.getPostsList();
        this.setState({ inProgress: false, posts: response });
    };

    /**
     * Handles calling handlePosts() immediately on component mount.
     */
    componentDidMount = () => this.handlePosts();

    decideOutput = () => {
        if (this.state.inProgress) {
            return <Spinner />;
        } else {
            return this.state.posts.map(post => <Post {...post} isExcerpt={true} key={post.id} />);
        }
    }

    render = () => (
        <section id="posts">
            {this.decideOutput()}
        </section>
    );
}

export default PostsList;
