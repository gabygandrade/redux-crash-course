import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  state = {
    posts: []
  }

  async componentWillMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    this.setState({ posts })
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  newPost: PropTypes.object
};

export default Posts;
