import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./containers/App/App";
import { LoadingOutlined } from "@ant-design/icons";
import "./configs/I18n";

ReactDOM.render(
  <Suspense fallback={<LoadingOutlined />}>
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  </Suspense>,
  document.getElementById("root")
);
