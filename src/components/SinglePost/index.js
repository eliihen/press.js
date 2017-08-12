import React, { Component } from 'react';
import * as WordPress from '../../libraries/WordPress';
import Post from '../Post';
import Spinner from '../Spinner';

class SinglePost extends Component {
    state = {
        inProgress: false,
        post: {}
    }

    handlePost = async () => {
        this.setState({ inProgress: true });
        let response = await WordPress.getSinglePost(this.props.match.params.id);
        this.setState({ inProgress: false, post: response });
    }

    componentDidMount = () => this.handlePost();

    decideOutput = () => {
        if (this.state.inProgress) {
            return <Spinner />;
        } else if (this.state.post.id) {
            return <Post {...this.state.post} isExcerpt={false} />;
        } else {
            return null;
        }
    }

    render = () => (
        <section id="post">
            {this.decideOutput()}
        </section>
    )
}

export default SinglePost;
