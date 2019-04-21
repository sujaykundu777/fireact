import React, { Component } from 'react';
// Setup Router 
import { BrowserRouter as Router, Route}  from 'react-router-dom';

// Import Navigation Component 
import Navigation from '../Navigation';
import Landing from '../Landing';
import Signin from '../Signin';
import Signup from '../Signup';

import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navigation/>
      
         <Route exact path={ROUTES.LANDING} component={Landing} />
         <Route path={ROUTES.SIGN_UP} component={Signup} />
         <Route path={ROUTES.SIGN_IN} component={Signin} />
     
       </div>
      </Router>

    );
  }
}

export default App;
