import React from 'react';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Not from '../Pages/404/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function router (){
return(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
      <Route path="*" component={Not} />
    </Switch>   
  </BrowserRouter>
);
}