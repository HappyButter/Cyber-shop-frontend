import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Home, Offer, Login, Register } from './pages';
import { ProtectedRoute } from './components';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const auth = useSelector(state => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/offer/:categoryId" exact component={Offer} />
          {/* <ProtectedRoute 
                          path="/offer/:categoryId" 
                          exact
                          component={Offer} 
                          auth={auth.isLoggedIn}
          /> */}
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;