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
        let endpoint = 'http://localhost:8080/wp/wp-json/wp/v2';
        let response = await WordPress.getPosts(endpoint);
        console.log(response);

        this.setState({ posts: response });
    })

    /**
     * Handles calling handlePosts() immediately on component mount.
     */
    componentDidMount = () => {
        this.handlePosts();
    }

    render = () => {
        return (
            <div id="posts">
                {this.state.posts.map(post => {
                    return <Post {...post} key={post.id} />
                })}
            </div>
        )
    }
}

export default Posts;
