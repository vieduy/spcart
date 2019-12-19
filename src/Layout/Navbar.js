import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled sleep awake" id="ftco-navbar">
          <div className="container">
            <span className="navbar-brand" href="index.html">XUÂN TÌNH NGUYỆN</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="oi oi-menu"></span> Menu
         </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item "><NavLink to="/home" activeClassName="active" className="nav-link">Trang chủ</NavLink></li>
                <li className="nav-item "><NavLink to="/team" activeClassName="active" className="nav-link">Đội hình</NavLink></li>
                <li className="nav-item"><NavLink to="/shop" activeClassName="active" className="nav-link">Sản phẩm</NavLink></li>
                <li className="nav-item"><NavLink to="/blog" activeClassName="active" className="nav-link">Bài viết</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" activeClassName="active" className="nav-link">Hộp thư</NavLink></li>
                <li className="nav-item cta cta-colored"><NavLink to="/" activeClassName="active" className="nav-link"><span
                  className="icon-shopping_cart"></span>[0]</NavLink></li>

              </ul>
            </div>
          </div>
        </nav>
      </Fragment >
    )
  }
}

export default Navbar;
