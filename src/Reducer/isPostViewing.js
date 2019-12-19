import * as Types from '../Constants/ActionTypes'
var initialState = null;
var posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.ON_POST_VIEWING:
      state = action.post;
      return state;
    case Types.OFF_POST_VIEWING:
      return null;
    default: return state;
  }
}


export default posts;