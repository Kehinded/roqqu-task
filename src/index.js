import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {SidebarContextProvider} from "./store/SidebarContext"

ReactDOM.render(
  <BrowserRouter>
    <SidebarContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SidebarContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
