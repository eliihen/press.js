import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for a single post.
 */
class Post extends Component {
    render = () => {
        return (
            <article className="post">
                <header>
                    <h1 className="post-title">
                        <Link to={`/posts/${this.props.id}`}>
                            {this.props.title.rendered}
                        </Link>
                    </h1>
                </header>
                <div className="post-content">{this.props.content.rendered}</div>
            </article>
        )
    }
}

export default Post;
