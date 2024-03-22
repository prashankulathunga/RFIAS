import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {ConfigProvider} from "antd";

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