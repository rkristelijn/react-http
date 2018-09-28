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
            const posts = response.data.slice(0, 4); //normally you would limit your back-end to send only 4 posts, but for demo purposes, we do it here
            if (DEBUG) console.log('Blog.js', 'response', response);
            const updatedPosts = posts.map(post => { //add the author as hardcoded
                return {
                    ...post,
                    author: 'Max'
                }
            });
            if (DEBUG) console.log('Blog.js', 'updatedPosts', updatedPosts);
            this.setState({ posts: updatedPosts });
        });
    }
    render = () => {
        if (DEBUG) console.log('Blog.js', 'render');

        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author} />
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