import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Reducer from "./store/features/Reducer";
import { legacy_createStore } from "redux";
const store = legacy_createStore(Reducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
