import React, { Component } from 'react';
import BillingDetail from './BillingDetail';
import CartTotal from './CartTotal';
import PaymentMethod from './PaymentMethod';
import { connect } from 'react-redux';
import ModalSuccess from './ModalSuccess';

class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      billingdetail: null,
      carttotal: null,
      paymentmethod: null
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  onGetInfo = ( value ) =>{
    this.setState({
      billingdetail: value
    });
  }

  onMergeData = (billingdetail, cart) => {
    cart = cart.map( (cartItem) => {
      return {
        _id: cartItem.product._id,
        quantity: cartItem.quantity
      }
    });
    return {
      customerInfo: {
        ...billingdetail
      },
      cart
    };
  }

  render() {
    const data = this.onMergeData(this.state.billingdetail ,this.props.cart);
    return (
        <section className="ftco-section" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row justify-content-center">
              <BillingDetail onGetInput={this.onGetInfo} />
              <div className="col-xl-5">
                <div className="row mt-5 pt-3">
                  <CartTotal/>
                  <PaymentMethod payload={data}/>
                </div>
              </div> 
            </div>
          </div>
          <ModalSuccess/>
        </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Checkout);
