import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routers } from "react-router-dom";

ReactDOM.render(
    <Routers>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Routers>,
    document.getElementById("root")
);
