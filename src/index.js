import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./styles/global.scss";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

import App from "./App";
ReactDOM.render(
     <React.StrictMode>
          <App id='outer-container' />
     </React.StrictMode>,
     document.getElementById("root")
);

// <ChakraProvider>
// </ChakraProvider>
