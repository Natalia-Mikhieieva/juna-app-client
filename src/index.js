import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProviderWrapper } from "./context/auth.context"; // <== IMPORT

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </Router>
);

reportWebVitals();
