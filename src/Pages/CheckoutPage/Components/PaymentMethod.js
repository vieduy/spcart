import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class PaymentMethod extends Component {

  handleSubmit = () => {
    this.props.onPlaceOrder(this.props.payload);
  }

  render() {
    return (
    <div className="col-md-12">
        <div className="cart-detail p-3 p-md-4">
          <h3 className="billing-heading mb-4">Payment Method</h3>
          <div className="form-group">
            <div className="col-md-12">
              <div className="radio">
                <label><input type="radio" name="optradio" className="mr-2" /> Thanh toán sau khi nhận hàng</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="radio">
                <label><input type="radio" name="optradio" className="mr-2" /> Thanh toán qua ví MoMo</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="checkbox">
                <label><input type="checkbox" defaultValue className="mr-2" /> I have read and accept the terms and conditions</label>
              </div>
            </div>
          </div>
          <p><a onClick={this.handleSubmit} href="#/" className="btn btn-primary py-3 px-4">Place an order</a></p>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onPlaceOrder: data => {
      return dispatch(actions.actPostOrderRequest(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(PaymentMethod);