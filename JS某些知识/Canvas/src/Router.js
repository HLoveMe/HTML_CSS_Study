import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Clock from './Pages/Clock';
import List from './Pages/List';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/clock" component={Clock} />
    </Switch>
  </HashRouter>
);


export default BasicRoute;