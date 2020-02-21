import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/:id" component={RoomDetails} />
      </Switch>
    </BrowserRouter>
  );
}
