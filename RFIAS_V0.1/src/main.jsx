import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/login/LoginForm.jsx";
import Signup from "./components/login/signup.jsx";
import Leave from "./components/user/userleave.jsx";
import Research from "./components/user/research.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Research/>
  </React.StrictMode>
);
