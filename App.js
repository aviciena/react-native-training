/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { createStore, applyMiddleware } from "redux";
import rootReducer from './src/reducers';
import rootSaga from './src/saga';
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';

import MainRoute from './src/navigation/route';

// initialize the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <StatusBar barStyle="dark-content" />
      <MainRoute />
    </Provider>
  );
};

export default App;
