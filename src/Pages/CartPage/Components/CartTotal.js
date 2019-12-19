import React, { Component } from 'react';
import { sumBy } from 'lodash';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class CartTotal extends Component {
  constructor(props){
    super(props);
    this.state = {
      freeShip: false
    }
  }

  totalAmout = (cart, shippay) => {
    let pay = sumBy(cart, cartItem => {
        return cartItem.product.gia*cartItem.quantity;
    });
    return pay + shippay;
  }

  totalPay = (cart) => {
    if (this.state.freeShip === "true"){
      return this.totalAmout(cart, 0);
    }
    else 
     return this.totalAmout(cart, 30000);
  }

  deliveryFee = () => {
    let fee;
    fee = this.state.freeShip === "true" ? 0 : 30000;
    return fee;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onTotalPay = () => {
    let shipFee =this.deliveryFee();
    let subFee = this.totalAmout(this.props.cart, 0)
    this.props.onTotalCart(subFee, shipFee);
  }

  render() {
    return (
      <div className="row justify-content-end">
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
        <div className="cart-total mb-3">
          <h3>Coupon Code</h3>
          <p>Enter your coupon code if you have one</p>
          <form action="#" className="info">
            <div className="form-group">
              <label>Coupon code</label>
              <input type="text" className="form-control text-left px-3"/>
            </div>
          </form>
        </div>
        <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
      </div>
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
        <div className="cart-total mb-3">
          <h3>Estimate shipping and tax</h3>
          <p>Enter your destination to get a shipping estimate</p>
          <form action="#" className="info">
            <div className="form-group">
              <label>Khu Vực</label>
              <br/>
              <select name="freeShip" value={this.state.freeShip} onChange={this.handleChange}>
                <option value="false">Nội Thành</option>
                <option value="true">Làng Đại Học</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="country">Địa chỉ</label>
              <input type="text" className="form-control text-left px-3" placeholder="Địa chỉ" />
            </div>
          </form>
        </div>
        <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Estimate</a></p>
      </div>
      <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
        <div className="cart-total mb-3">
          <h3>Cart Totals</h3>
          <p className="d-flex">
            <span>Subtotal</span>
            <span>{this.totalAmout(this.props.cart, 0)}</span>
          </p>
          <p className="d-flex">
            <span>Delivery</span>
            <span>{this.deliveryFee()}</span>
          </p>
          <p className="d-flex">
            <span>Discount</span>
            <span>0</span>
          </p>
          <hr />
          <p className="d-flex total-price">
            <span>Total</span>
            <span>{this.totalPay(this.props.cart)}</span>
          </p>
        </div>
        <p><a onClick={() => this.onTotalPay()} href="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTotalCart: (subTotal, delivery) => {
      dispatch(actions.totalCart({
        subTotal, 
        delivery
      }));
    }
  }
}

export default connect(null, mapDispatchToProps)(CartTotal);