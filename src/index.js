import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import ErrorContainer from './containers/ErrorContainer';


function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AppContainer />
          </Route>
          <Route path="/about">
            <AboutContainer />
          </Route>
          <Route component={ErrorContainer} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
