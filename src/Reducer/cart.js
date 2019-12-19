import * as types from './../Constants/ActionTypes';
import { findIndex, remove } from 'lodash';

const data = JSON.parse(localStorage.getItem('products'));

var initialState = data ? data : [];


const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            var a = findIndex(state, product => {
                return product.product._id === action.product._id;
            })
            if (a === -1 ) state.push({
                product: {
                    ...action.product
                },
                quantity : 1
            });
            else state[a].quantity++;
            localStorage.setItem('products', JSON.stringify(state))
            return [...state];
        case types.DELETE_CART_ITEM:
            remove(state, product => {
                return product.product.tensp === action.product.tensp;
            });
            localStorage.setItem('products', JSON.stringify(state))
            return [...state];
        case types.UPDATE_CART_ITEM: 
            var id = findIndex(state, product => {
                return product.product.tensp === action.product.tensp;
            })
            state[id].quantity = action.quantity;
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default myReducer;