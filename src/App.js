import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Skeleton from '@material-ui/lab/Skeleton';
import { ProtectedRoute, AppBar } from './components';
import { MiddlepaneOffer } from 'styles/Middlepane.css';
import { getPromos } from './state/promo/promoActions';
import { getRecommendedProducts } from './state/products/productActions';
import { getAllCategories } from './state/categories/categoriesActions';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Offer = lazy(() => import('./pages/Offer'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Promo = lazy(() => import('./pages/Promo'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Account = lazy(() => import('./pages/Account'));
const Orders = lazy(() => import('./pages/Orders'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const ProductManagement = lazy(() => import('./pages/ProductManagement'));
const PromoManagement = lazy(() => import('./pages/PromoManagement'));
const OrderDetails = lazy(() => import('./pages/OrderDetails'));
const ServiceManagement = lazy(() => import('./pages/ServiceManagement'));
const Finances = lazy(() => import('./pages/Finances'));



const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPromos());
      dispatch(getRecommendedProducts());
      dispatch(getAllCategories());
  },[dispatch]);

  const Loading = () => {
    return( 
      <MiddlepaneOffer>
        <Skeleton animation="wave" height={500} />
      </MiddlepaneOffer>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="layout">
          <AppBar/>
          <Suspense fallback={<Loading/>}>
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
                              component={PlaceOrder} 
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
                              path="/service" 
                              exact
                              component={ServiceManagement} 
                              auth={auth.isAdmin}
              />
              <ProtectedRoute 
                              path="/finaces" 
                              exact
                              component={Finances} 
                              auth={auth.isAdmin}
              />
              <ProtectedRoute 
                              path="/order/details/:id" 
                              exact
                              component={OrderDetails} 
                              auth={auth.isLoggedIn}
              />
            </Switch>
          </Suspense>
        </div>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;