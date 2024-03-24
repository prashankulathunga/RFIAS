import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
<<<<<<< Updated upstream
import { BrowserRouter } from "react-router-dom";
import {ConfigProvider} from "antd";
=======
import "./index.css";
import Signup from "./components/login/signup.jsx";
import Leave from "./components/user/userleave.jsx";
import Research from "./components/user/research.jsx";
import Udashboard from "./components/user/userdashboard.jsx";
import Structure from "./components/user/USidebar.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Employee from "./components/employee.jsx"; // Import Employee component
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#706db1',
                    borderRadius: 8,

                    // Alias Token
                    // colorBgContainer: '#f6ffed',
                },
            }}
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
);
// #9b59b6   #4C489D
