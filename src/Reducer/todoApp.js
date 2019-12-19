import { combineReducers } from 'redux';
import posts from './posts'
import isPostViewing from './isPostViewing'

const todoApp = combineReducers({
  posts,
  isPostViewing
})

export default todoApp;