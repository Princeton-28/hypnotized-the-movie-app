// import section
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // here we wrapped the context provider around our app component
  <ContextProvider>
    <App />
  </ContextProvider>
);
