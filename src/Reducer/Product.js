import * as types from './../Constants/ActionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_PRODUCTS:
            state = [...action.products];
            return [...state];
        default: return [...state];        
    }
}

export default myReducer;