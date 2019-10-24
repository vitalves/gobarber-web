import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

/* TODAS AS PÁGINAS: */
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// página que exigem autenticação:
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>Erro 404 ;( </h1>} />
    </Switch>
  );
}
