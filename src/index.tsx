import ReactDOM from "react-dom/client";
import {combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import App from "./App";
import Pokimons from "./store/reducers";
import rootSaga from "./store/rootSaga";
import './styles/font.scss'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ Pokimons });
const store = configureStore({reducer : rootReducer, middleware : [sagaMiddleware]});

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
