import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartTotal extends Component {
  render() {
    const { totalCart } = this.props;
    let total = totalCart.subTotal + totalCart.delivery
    return (
    <div className="col-md-12 d-flex mb-5">
        <div className="cart-detail cart-total p-3 p-md-4">
          <h3 className="billing-heading mb-4">Cart Total</h3>
          <p className="d-flex">
            <span>Subtotal</span>
            <span>{totalCart.subTotal}</span>
          </p>
          <p className="d-flex">
            <span>Delivery</span>
            <span>{totalCart.delivery}</span>
          </p>
          <hr />
          <p className="d-flex total-price">
            <span>Total</span>
            <span>{total}</span>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    totalCart: state.totalCart
  }
}

export default connect(mapStateToProps, null)(CartTotal);