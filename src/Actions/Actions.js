import * as Types from '../Constants/ActionTypes'
import api from "../service/api";

export const addToCart = product => {
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
        if (res.status === 200){
          dispatch(showModalSuccess('Đặt hàng thành công'));
          localStorage.removeItem("products");
        }
      })
      .catch( err => {
        dispatch(showModalSuccess('Đặt hàng thất bại'));
      })
    }
  }

  export const onFeedbackRequest = payload => {
    return dispatch => {
      return api.post('feedback', payload)
      .then( res => {
        console.log(res);
        if (res.status === 200){
          dispatch(showModalSuccess('Cảm ơn bạn đã đóng góp ý kiến'));
        }
      })
      .catch( err => {
        console.log(err);
        dispatch(showModalSuccess('Đóng góp thất bại'));
      })
    }
  }
