import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class Product extends Component {

  onAddProduct = product => {
    this.props.onAddToCart(product);
    this.props.showModalSuccess('Thank you');
  }

  render() {
    const product = this.props;
    return (
    <div className="col-md-6 col-lg-3 ftco-animate">
        <div className="product">
          <a href="#/" className="img-prod"><img className="img-fluid" src="images/product-1.jpg" alt="Colorlib Template" />
            <span className="status">30%</span>
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#/">{product.tensp}</a></h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">${product.gia}</span></p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <a href="#/" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                  <span><i className="ion-ios-menu" /></span>
                </a>
                <a onClick={() => this.onAddProduct(product)} href="#/" className="buy-now d-flex justify-content-center align-items-center mx-1">
                  <span><i className="ion-ios-cart" /></span>
                </a>
                <a href="#/" className="heart d-flex justify-content-center align-items-center ">
                  <span><i className="ion-ios-heart" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: product => {
            dispatch(actions.addToCart(product));
        },
        showModalSuccess: message => {
          dispatch(actions.showModalSuccess(message));
        }
    }
}

export default connect(null, mapDispatchToProps)(Product);