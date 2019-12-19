import React, { Component } from 'react';

class BillingDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      university: 'HCMUT',
      address: '',
      phone: '',
      email: '',
      note: ''
    };
  }
  
  handleInputChange = (event) => {
    this.props.onGetInput(this.state);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { name, university, address, phone, email, note } = this.props;
    return (
      <div className="col-xl-7 ftco-animate">
        <form onSubmit={this.handleSubmit} className="billing-form">
          <h3 className="mb-4 billing-heading">Billing Details</h3>
          <div className="row align-items-end">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="name">Name(*)</label>
                <input name="name" value={name} onChange={this.handleInputChange} type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="country">University</label>
                <div className="select-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                  <select name="university" value={university} onChange={this.handleInputChange} id className="form-control">
                    <option value="HCMUT">HCMUT</option>
                    <option value="UIT">UIT</option>
                    <option value="HCMUS">HCMUS</option>
                    <option value="UEL">UEL</option>
                    <option value="USSH">USSH</option>
                    <option value="IU">IU</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="streetaddress">Address(*)</label>
                <input name="address" value={address} onChange={this.handleInputChange} type="text" className="form-control" placeholder="House number and street name" />
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone(*)</label>
                <input name="phone" value={phone} onChange={this.handleInputChange} type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Email(*)</label>
                <input name="email" value={email} onChange={this.handleInputChange} type="text" className="form-control" />
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <div className="form-group">
                <label>Ghi chú</label>
                <input name="note" value={note} onChange={this.handleInputChange} type="text" className="form-control" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BillingDetail;
