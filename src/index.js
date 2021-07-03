import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
// import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Routing>
      <App />
    </Routing>
  </React.StrictMode>,
  document.getElementById("root")
);
