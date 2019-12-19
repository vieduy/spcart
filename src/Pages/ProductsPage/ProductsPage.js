import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Title from './Components/Title'
import Products from './Components/Products';
import Footer from './Components/Footer';

class ProductsPage extends Component {
  render() {
    return (
      <div className="goto-here">
        <Navbar/>
        <Title/>
        <Products/>
        <Footer/>
      </div>
    )
  }
}

export default ProductsPage;
