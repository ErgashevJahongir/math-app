import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/ru_RU";
import moment from "moment";
import "./index.css";
import "./antEditStyle.css";
moment.locale("uz-latn");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ConfigProvider locale={locale}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);

reportWebVitals();
