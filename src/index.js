import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <Provider store={store}>
                    <App id='outer-container' />
                </Provider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
