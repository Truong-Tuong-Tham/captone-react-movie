import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoadingPage from "./component/loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
    <LoadingPage/>
    <App />
  </Provider>
);
