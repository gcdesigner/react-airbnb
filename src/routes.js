import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import history from '~/services/history';

import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/:id" component={RoomDetails} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
