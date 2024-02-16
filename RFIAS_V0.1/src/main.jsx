import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./components/login/signup.jsx";
import Leave from "./components/user/userleave.jsx";
import Research from "./components/user/research.jsx";

import Udashboard from "./components/user/userdashboard.jsx";
import Structure from "./components/user/USidebar.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import BasicExample from "./components/user/structure.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Udashboard />
  </React.StrictMode>
);
