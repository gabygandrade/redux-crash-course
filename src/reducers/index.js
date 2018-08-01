import { combineReducers } from 'redux';
import postReducer from './postReducer';

// combine all reducers here

export default combineReducers({
    posts: postReducer
})
