import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Home, Offer, LogIn } from './pages'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const node = useRef();
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div ref={ node }>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/offer/:categoryId" exact component={Offer}/>
            <Route path="/login" exact component={LogIn}/>
          </Switch>
        </div>      
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;