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
import { BrowserRouter } from "react-router-dom";

import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";
import LoginForm from "./components/login/LoginForm.jsx";
import Signup from "./components/login/signup.jsx";
import Employee from "./components/employee.jsx";

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
                <Employee/>
            </BrowserRouter>

        </ConfigProvider>
    </React.StrictMode>
);
// #9b59b6   #4C489D