// where we will evaluate any actions like fetching posts and creating new post
// we create TYPES for our actions ie. constants

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // if it goes into this line in the reducer, it returns the state with the items that have been fetched
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}