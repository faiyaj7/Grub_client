import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      {/* <ApiProvider store={store}> */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* </ApiProvider> */}
    </BrowserRouter>
  </>
);
