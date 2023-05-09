import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.VITE_ENV === "prod" ? "/project-x" : "/"}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
