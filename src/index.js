import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [
    { id: 0, name: "멋진신발", quan: 2 },
    { id: 1, name: "진짜멋진신발", quan: 3 },
    { id: 2, name: "진짜진짜멋진신발", quan: 4 },
  ];
});

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
