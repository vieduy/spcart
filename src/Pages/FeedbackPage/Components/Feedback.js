import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          description: ''
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
        this.props.onFeedback(this.state);
    }

  render() {
      const { name, description } = this.state;
    return (
        <section className="ftco-section contact-section bg-light">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="w-100" />
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p><span>Website</span> <a href="#/">yoursite.com</a></p>
                </div>
              </div>
            </div>


            <div className="row block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form onSubmit={this.handleSubmit} action="#" className="bg-white p-5 contact-form">
                  <div className="form-group">
                    <input name="name" value={name} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <textarea name="description" value={description} onChange={this.handleInputChange} id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" onClick={this.handleSubmit} className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
              <div className="col-md-6 d-flex">
                <div id="map" className="bg-white" />
              </div>
            </div>
          </div>
        </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onFeedback: payload => {
            dispatch(actions.onFeedbackRequest(payload));
        }
    }
}

export default connect(null, mapDispatchToProps)(Feedback);