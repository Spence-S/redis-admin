import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AddClient from './containers/AddClient';
import DbList from './containers/DbList';

export default () => (
  <App>
    <div className="container" data-tid="container">
      <Route path="/" component={HomePage} />
      <Switch>
        <Route path="/addclients" component={AddClient} />
        <Route path="/listy" component={DbList} />
      </Switch>
    </div>
  </App>
);
