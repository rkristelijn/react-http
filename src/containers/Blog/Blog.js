import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const DEBUG = true;

class Blog extends Component {
    state = {
        posts: []
    };

    componentDidMount = () => {
        if (DEBUG) console.log('Blog.js', 'componentDidMount');
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            if (DEBUG) console.log('Blog.js', 'response', response);
            this.setState({ posts: response.data });
        });
    }
    render = () => {
        if (DEBUG) console.log('Blog.js', 'render');

        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title}></Post>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;