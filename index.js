import React, { Component } from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./style.css";

const intialState = { count: 0 };

function reducer(state = intialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
