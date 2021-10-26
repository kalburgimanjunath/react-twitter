import React from 'react';
import './style.css';
import { Switch, Link, Route } from 'react-router-dom';
import { Login, Home, Dashboard } from './pages/index.js';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/*" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
