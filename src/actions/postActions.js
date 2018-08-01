import { FETCH_POSTS, NEW_POST } from './types';

// Redux Thunk middleware allows you to write -action creators- that return a function instead of an action
// + allows us to call the dispatch fn directly so we can make async requests

export const fetchPosts = () => async (dispatch) => {
    // when this action is called, what it fetches the request and dispatches the action with the payload to the reducer (can test this by putting a clg in the reducer)

    // can think of -dispatch- like a resolve in a promise - whenever we want to send the data we would call dispatch (like we would call resolve in a promise)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // dispatch the data to the reducer to update the application state 
    dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
}

export const createPost = postData => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    // get back the single post
    const post = await response.json();

    dispatch({
        type: NEW_POST,
        payload: post
    })
}