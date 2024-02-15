import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./components/login/signup.jsx";
import Leave from "./components/user/userleave.jsx";
import Research from "./components/user/research.jsx";
import Sidebar from "./components/user/sidebar.jsx";
import Udashboard from "./components/user/userdashboard.jsx";
import Structure from "./components/user/structure.jsx";
import LoginForm from "./components/login/LoginForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Structure />
  </React.StrictMode>
);
