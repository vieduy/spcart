import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Title from './Components/Title';
import Feedback from './Components/Feedback';
import ModalSuccess from './Components/ModalSuccess';

class FeedbackPage extends Component {
  render() {
    return (
    <div>
        <Navbar/>
        <Title />
        <Feedback/>
        <Footer/>
        <ModalSuccess/>
      </div>
    )
  }
}

export default FeedbackPage;