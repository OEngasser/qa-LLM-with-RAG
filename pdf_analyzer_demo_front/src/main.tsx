import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.log("error");
}
