import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./components/JSX/Content/FilmDetails/ContextProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <GoogleOAuthProvider clientId="955907912121-cgm3012jtev9j9382l4beh4bjiotlr4t.apps.googleusercontent.com">
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (htmlFor example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
