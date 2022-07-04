import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/circular-std-medium-500.ttf";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import ApplicationsRoute from "./components/ApplicationsRoute";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop />
        <ApplicationsRoute />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
