import React, { Component } from 'react';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import CartPage from './Pages/CartPage/CartPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

class Routes extends Component {

  render() {
    const routes = [
      // {
      //   path: '/home',
      //   exact: true,
      //   main: () => <Homepage />
      // },

      {
        path: '/products',
        exact: false,
        main: () => <ProductsPage />
      },

      {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
      },

      {
        path: '/checkout',
        exact: false,
        main: () => <CheckoutPage />
      },

    ];

    return (
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return <Route path={route.path} component={route.main} exact={route.exact} key={index} />
          })
          }
        </Switch>
      </Router>
    );
  }
}

export default Routes;