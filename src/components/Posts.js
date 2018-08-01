import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    // call the action
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (nextProps) => {
    // when it receives a new property, this will run
    // this is just 1 way to do this! could add the new post in different ways 
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
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
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
}

// connect - connects your components to your redux store (that was provided by the Provider component)
const mapStateToProps = state => ({
  // reason we use 'posts' here is bc in our rootReducer, thats what we named our postReducer
  // here we want the items from the posts reducer
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
