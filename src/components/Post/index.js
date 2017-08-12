import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';

/**
 * Component for a single post.
 */
const Post = props => (
    <PostWrapper>
        <PostHeader title={props.title.rendered} id={props.id} />
        <PostMeta {...props["_embedded"]} />
        <p className="uk-article-meta">Written by {props._embedded.author[0].name}</p>
        <div
            className="post-content"
            dangerouslySetInnerHTML={props.isExcerpt ? postContent(props.excerpt.rendered) : postContent(props.content.rendered)}
        />
    </PostWrapper>
)

/**
 * Returns an object that React will render into HTML.
 * Dangerous, thus the dedicated function.
 * 
 * @param {string} content The content of the post.
 * @returns {object}
 */
const postContent = content => {
    return {__html: content};
};

const PostHeader = ({title, id}) => (
    <header>
        <h1 className="uk-article-title">
            <Link className="uk-link-reset" to={`/posts/${id}`}>
                {title}
            </Link>
        </h1>
    </header>
)

const PostWrapper = ({children}) => (
    <article className="uk-article">
        {children}
    </article>
)

export default Post;
