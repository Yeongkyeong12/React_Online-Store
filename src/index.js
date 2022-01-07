import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// alert닫기 정도의 간단한 동작 구현은 useState쓰는 게 더 나음
function reducer2(state = true, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let initialState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "진짜멋진신발", quan: 3 },
  { id: 2, name: "진짜진짜멋진신발", quan: 4 },
];

function reducer(state = initialState, action) {
  if (action.type === "addList") {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  }
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

let store = createStore(combineReducers({ reducer, reducer2 }));

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
