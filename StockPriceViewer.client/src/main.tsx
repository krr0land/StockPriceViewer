import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/store";

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme accentColor="orange" grayColor="slate" appearance="dark">
                <App />
            </Theme>
        </Provider>
    </React.StrictMode>
);
