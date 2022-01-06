import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let initialState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "진짜멋진신발", quan: 3 },
  { id: 2, name: "진짜진짜멋진신발", quan: 4 },
];

function reducer(state = initialState, action) {
  if (action.type === "increase") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "decrease") {
    // quan <= 0이면, 1을 그만 빼도록 하는 조건문 추가하기
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
