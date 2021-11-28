import React from "react";
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import Auth from '../pages/Auth'

const index = () => {
     return (
          <div className='app'>
          <Router>
                    <Switch>
                         <Route path='/auth' component={Auth} />
                         <Route path='/' component={Home} />
                    </Switch>
          </Router>
          </div>
     );
};


export default index