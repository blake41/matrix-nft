
import App from './App.js'
import Puzzle from './Puzzle.js'
import './AppRouter.css'
import React, { useContext, useEffect, useState } from 'react';
import { appStore, onAppMount } from './state/app';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function AppRouter() {
  const { state, dispatch, update } = useContext(appStore);
  const onMount = () => {
    dispatch(onAppMount());
  };
  useEffect(onMount, []);

  return (
    <Router>
      <div className="router">
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/puzzle">Puzzle</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/puzzle">
            <Puzzle state={state} update={update}/>
          </Route>
          <Route path="/">
            <App state={state}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
