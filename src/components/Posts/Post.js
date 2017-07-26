import React, { Component } from 'react';

/**
 * Component for a single post.
 */
class Post extends Component {
    render = () => {
        return (
            <article className="post">
                <h1 className="post-title">{this.props.title.rendered}</h1>
                <div className="post-content">{this.props.content.rendered}</div>
            </article>
        )
    }
}

export default Post;
