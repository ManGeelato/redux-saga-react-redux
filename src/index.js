import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose } from "redux"
import reducers from './reducers';
import { Provider } from 'react-redux';
import FavoritePets from './FavoritePets';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// 1.Store = Global State
const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
(createStore)(reducers);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <FavoritePets /> */}
    </Provider>
  </React.StrictMode>
);
