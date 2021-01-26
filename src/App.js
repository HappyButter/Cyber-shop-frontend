import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import {  Home, 
          Offer,
          Login,
          Register,
          Promo,
          ProductDetails,
          Account,
          Orders,
          Cart,
          ProductManagement,
          PromoManagement,
          OrderDetails } from './pages';

import { ProtectedRoute } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getPromos } from './state/promo/promoActions';
import { getRecommendedProducts } from './state/products/productActions';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPromos());
      dispatch(getRecommendedProducts());
  },[dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/offer/:categoryId" exact component={Offer} />
          <Route path="/promo/:promoId" exact component={Promo} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <ProtectedRoute 
                          path="/cart" 
                          exact
                          component={Cart} 
                          auth={auth.isLoggedIn}
          />
          <ProtectedRoute 
                          path="/account" 
                          exact
                          component={Account} 
                          auth={auth.isLoggedIn}
          />
          <ProtectedRoute 
                          path="/orders" 
                          exact
                          component={Orders} 
                          auth={auth.isLoggedIn}
          />
          <ProtectedRoute 
                          path="/products" 
                          exact
                          component={ProductManagement} 
                          auth={auth.isAdmin}
          />
          <ProtectedRoute 
                          path="/management/promo" 
                          exact
                          component={PromoManagement} 
                          auth={auth.isAdmin}
          />
          <ProtectedRoute 
                          path="/order/details/:id" 
                          exact
                          component={OrderDetails} 
                          auth={auth.isLoggedIn}
          />

        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;