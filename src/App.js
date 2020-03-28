import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import Home from "./components/home";
import About from "./components/about";
import { watchLoadData } from "./saga/saga";

function App(){
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(watchLoadData)


    return (
      <Provider store={store}>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Router>
      </Provider>
    );
  }


export default App;
