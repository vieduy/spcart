import * as Types from '../Constants/ActionTypes'
import api from "../service/api";

export const addToCart = product => {
  console.log(product);
    return {
        type: Types.ADD_TO_CART,
        product
    }
}

export const actFetchProductsRequest = () => {
    return dispatch => {
        return api.get('product')
        .then( response => {
          dispatch(getProducts(response.data));
        });
    }
  }

  export const getProducts = products => {
    return {
        type: Types.GET_PRODUCTS,
        products
    }
  }  

  export const showModalSuccess = message => {
    return {
        type: Types.SHOW_MODAL_SUCCESS,
        message
    }
  }

  export const updateQuantity = (product, quantity) => {
    return {
        type: Types.UPDATE_CART_ITEM,
        product,
        quantity
    }
  }
  
  export const deleteItem = product => {
    return {
        type: Types.DELETE_CART_ITEM,
        product
    }
  }

  export const totalCart = payload => {
    return {
      type: Types.TOTAL_CART,
      payload
    }
  }

  export const actPostOrderRequest = payload => {
    return dispatch => {
      return api.post('checkout', payload)
      .then( res => {
        dispatch(showModalSuccess('Đặt hàng thành công'));
        localStorage.removeItem("products");
      })
      .catch( err => {
        dispatch(showModalSuccess('Đặt hàng thất bại'));
      })
    }
  }
