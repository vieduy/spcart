import React, { Component } from 'react';
import Navbar  from './Components/Navbar';
import Title from './Components/Title';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class CheckoutPage extends Component {
  render() {
    return (
    <div>
        <Navbar />
        <Title />
        <Checkout />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default CheckoutPage;