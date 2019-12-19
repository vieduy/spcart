import * as types from '../Constants/ActionTypes';

var initialState = JSON.parse(localStorage.getItem("fee"));

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.TOTAL_CART:
            state = action.payload;
            localStorage.setItem("fee", JSON.stringify(state));
           return {
                ...action.payload
           };
        default: return state;
    }
}

export default myReducer;