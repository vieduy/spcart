import { combineReducers } from 'redux';
import cart from './cart';
import products from './Product';
import modal from './modal';
import totalCart from './totalcart';

const myReducer = combineReducers({
    cart,
    products,
    modal,
    totalCart
})

export default myReducer;