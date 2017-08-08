import React, { Component } from 'react';
import * as WordPress from '../../libraries/WordPress';
import Post from './Post';

/**
 * A wrapper component for all of the posts (or the single post).
 */
class Posts extends Component {
    state = {
        posts: []
    }

    /**
     * Handles getting the post (or posts) from WordPress.
     */
    handlePosts = ( async () => {
        let endpoint = `http://localhost:8080/wp/wp-json/wp/v2`;
        let id = this.props.match.params.id;

        let response = await WordPress.getPosts(endpoint, id);
        
        this.setState({ posts: response });
    })

    /**
     * Handles calling handlePosts() immediately on component mount.
     */
    componentDidMount = () => {
        this.handlePosts();
    }

    componentDidUpdate = () => {
        this.handlePosts();
    }

    componentWillUnmount = () => {
        this.setState({ posts: [] });
    }

    render = () => {
        return (
            <section id="posts">
                {this.state.posts.map(post => {
                    return <Post {...post} key={post.id} />
                })}
            </section>
        )
    }
}

export default Posts;
