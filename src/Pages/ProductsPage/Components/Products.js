import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';
import ModalSuccess from './ModalSuccess';
 
class Products extends Component {

  componentDidMount(){ 
    this.props.onGetProducts();
  }  

  showProducts = (products) => {
    let listProducts = null;
    listProducts = products.map((product, index) => {
      return (
        <Product tensp={product.tensp} gia={product.gia} key={index} _id={product._id} mota={product.mota} />
      );
    })
    return listProducts;
  }

  render() {
    return (
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 mb-5 text-center">
                <ul className="product-category">
                  <li><a href="#/" className="active">All</a></li>
                  <li><a href="#/">Vegetables</a></li>
                  <li><a href="#/">Fruits</a></li>
                  <li><a href="#/">Juice</a></li>
                  <li><a href="#/">Dried</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              {this.showProducts(this.props.products)}
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#/">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#/">2</a></li>
                    <li><a href="#/">3</a></li>
                    <li><a href="#/">4</a></li>
                    <li><a href="#/">5</a></li>
                    <li><a href="#/">&gt;</a></li>
                  </ul>
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
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => {
      dispatch(actions.actFetchProductsRequest());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);