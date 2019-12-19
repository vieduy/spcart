import * as Types from './../Constants/ActionTypes'
var initialState = [];
var posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_POSTS_DATA:
      state = action.posts;
      return [...state]
    default: return [...state];
  }
}


export default posts;